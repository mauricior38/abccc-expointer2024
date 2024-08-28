import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDimoISs_dkNNf_TV7hUdcJvX2HgKXPR5c",
  authDomain: "cavalocrioulo-play.firebaseapp.com",
  projectId: "cavalocrioulo-play",
  storageBucket: "cavalocrioulo-play.appspot.com",
  messagingSenderId: "897115681957",
  appId: "1:897115681957:web:2a1bf0979eb2503b96c94c",
  measurementId: "G-WTFRHGQDJ2"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

const storage = getStorage(firebaseApp);

export { auth, db, storage};