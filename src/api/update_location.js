import { initializeApp } from 'firebase/app';
import { getDatabase, goOffline, ref, set} from "firebase/database";

async function setHomeState(db, state) {
    // Changes the home state to the given state
    const home_state_ref = ref(db, 'home_state');
    return await set(home_state_ref, state).then(() => {
        return {success: true};
    }).catch((error) => {
        return { success: false, error_msg: error};
    });
}

export default async function update_location(req, res) {
    async function init_db() {
        //Establish connection to firebase
        const firebaseConfig = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
            databaseURL: `https://${process.env.PROJECT_ID}-default-rtdb.firebaseio.com`,
            projectId: process.env.PROJECT_ID,
            storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
            messagingSenderId: process.env.MESSAGE_SEND_ID,
            appId: process.env.FIREBASE_APP_ID
        };
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        //Return connection to database
        return db;
    }

    // Basic Auth from https://stackoverflow.com/questions/23616371/basic-http-authentication-with-node-and-express-4
    const auth = {login: 'broken', password: process.env.ADMIN_PASS};

    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
        const db = await init_db();
        return await setHomeState(db, req.body.state).then((result) => {
            goOffline(db);
            return res.json(result);
        }).catch((error) => {
            console.error(error);
            return res.json(error);
        });
    }

    // Access denied...
    res.set('WWW-Authenticate', 'Basic realm="401"') 
    res.status(401).send('Authentication required.') 
};