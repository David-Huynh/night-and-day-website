import fetch from "node-fetch"

export default async function auth(req, res) {
    async function callback() {
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
                process.env['ACCESS_TOKEN'] = data.access_token;
                process.env['REFRESH_TOKEN'] = data.refresh_token;
                res.json(data)
            } catch (error) {
                res.status(500).send(error)
            }
        }
    }
    
    // From https://stackoverflow.com/questions/23616371/basic-http-authentication-with-node-and-express-4
    const auth = {login: 'broken', password: `${process.env.ADMINPASS}`} // change this
    
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
        // Access granted...
        return await callback();
    }

    // Access denied...
    res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    res.status(401).send('Authentication required.') // custom message
};