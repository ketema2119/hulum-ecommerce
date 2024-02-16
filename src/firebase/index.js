import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import app from './config';

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }