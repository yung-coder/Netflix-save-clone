import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyBBPJhF-wLY0cQPGrCapi7UWsUoOsHo77w",

  authDomain: "new-proj-3a71f.firebaseapp.com",

  projectId: "new-proj-3a71f",

  storageBucket: "new-proj-3a71f.appspot.com",

  messagingSenderId: "207289529810",

  appId: "1:207289529810:web:fe933674665dde4286040b"

};




// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };
