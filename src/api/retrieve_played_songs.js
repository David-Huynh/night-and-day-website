import fetch from "node-fetch"

export default async function refresh_token(req, res) {
    async function retrieve_played_songs(access_token) {
        const result = await fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=${encodeURIComponent(1)}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
        });
        const data = await result.json();
        res.json(data)

    }

    const client_id = `${process.env.CLIENT_ID}`;
    const client_secret = `${process.env.CLIENT_SECRET}`;
    const refresh_token = `${process.env.REFRESH_TOKEN}`;
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refresh_token);
    try {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            body: params,
            headers: {
                'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
            },
        });
        const data = await result.json();
        const access_token = data.access_token;
        return await retrieve_played_songs(access_token);
    }catch (error) {
        res.status(500).send(error)
    }
};