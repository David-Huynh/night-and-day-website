import { initializeApp } from 'firebase/app';
import { getDatabase, goOffline, ref, get} from "firebase/database";

async function getHomeState(db) {
    // Returns the home state on the database
    const home_state_ref = ref(db, 'home_state');
    return await get(home_state_ref).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return 'NO SUCH STATE';
        }
    }).catch((error) => {
        console.error(error);
        return error;
    });
}
export default async function retrieve_location(req, res) {
    async function getDatabaseRef(){
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
        return db;
    }
    const db = await getDatabaseRef();
    return await getHomeState(db).then((home_state) => {
        return res.status(200).json({home: home_state});
    }).catch((error) => {
        console.error(error);
        return res.status(500).json({error: error});
    });
}