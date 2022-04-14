import fetch from 'node-fetch';

export default async function spotify_callback_auth(req, res) {
    const client_id = `${process.env.CLIENT_ID}`;
    const client_secret = `${process.env.CLIENT_SECRET}`;
    const redirect_uri = 'https://dhuynh.ca/api/callback';

    const code = req.query.code || null;
    const state = req.query.state || null;
    
    const params = new URLSearchParams();
    if (state === null) {
        params.append('error', 'state_mismatch');
        res.redirect('/#' + params.toString());
    } else {
        // Send post request to Spotify API https://accounts.spotify.com/api/token to get access token
        try {
            params.append('grant_type', 'authorization_code');
            params.append('code', code);
            params.append('redirect_uri', redirect_uri);
            const result = await fetch('https://accounts.spotify.com/api/token', {
                method: "POST",
                body: params,
                headers: {
                    'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
                },
            });
            const data = await result.json();
            // Checks that the user is authenticated and is an admin
            const user_result = await fetch('https://api.spotify.com/v1/me/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${data.access_token}`
                },
            });
            const user_data = await user_result.json();
            if (user_data.email.localeCompare(process.env.ADMIN_EMAIL, 'en', { sensitivity: 'accent' }) === 0) {
                res.json(data)
            } else {
                res.status(401).send('Unauthorized')
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }
};