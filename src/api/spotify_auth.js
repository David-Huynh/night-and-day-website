
export default function auth(req, res) {
    function retrieve_code(){
        const client_id = `${process.env.CLIENT_ID}`;
        const redirect_uri = 'https://dhuynh.ca/api/callback';

        const params = new URLSearchParams();
        const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 7);

        params.append('client_id', client_id);
        params.append('redirect_uri', redirect_uri);
        params.append('response_type', 'code');
        params.append('scope', 'user-read-private');
        params.append('state', state);

        res.redirect('https://accounts.spotify.com/authorize?' + params.toString());
    }
    
    // From https://stackoverflow.com/questions/23616371/basic-http-authentication-with-node-and-express-4
    const auth = {login: 'broken', password: `${process.env.ADMINPASS}`} // change this
    
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
        // Access granted...
        return retrieve_code();
    }

    // Access denied...
    res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    res.status(401).send('Authentication required.') // custom message
};
