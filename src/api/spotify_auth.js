
export default function spotify_auth(req, res) {
    const client_id = process.env.CLIENT_ID;
    const redirect_uri = 'https://dhuynh.ca/api/callback';

    const params = new URLSearchParams();
    const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 7);

    params.append('client_id', client_id);
    params.append('redirect_uri', redirect_uri);
    params.append('response_type', 'code');
    params.append('scope', 'user-read-currently-playing user-read-email');
    params.append('state', state);

    res.redirect('https://accounts.spotify.com/authorize?' + params.toString());
};
