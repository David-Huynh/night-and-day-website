export default function auth(req, res) {
    function callback() {
        const code = req.query.code || null;
        const state = req.query.state || null;
        const params = new URLSearchParams();
        if (state === null) {
            params.append('error', 'state_mismatch');
            res.redirect('/#' + params.toString());
        } else {
            const authOptions = {
                form: {
                    code: code,
                    redirect_uri: redirect_uri,
                    grant_type: 'authorization_code'
                },
                headers: {
                    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
                },
            };
            try {
                const result = await fetch('https://accounts.spotify.com/api/token', 
                authOptions).then(res => {
                    return res.json()
                })
                process.env['ACCESS_TOKEN'] = result.access_token;
                res.json(result)
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
        return callback();
    }

    // Access denied...
    res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    res.status(401).send('Authentication required.') // custom message
};