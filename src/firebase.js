import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPlfnxRy2qgALYXokKuGlxPM5D1052bvQ",
  authDomain: "chuks-full-stack-netflix-clone.firebaseapp.com",
  projectId: "chuks-full-stack-netflix-clone",
  storageBucket: "chuks-full-stack-netflix-clone.appspot.com",
  messagingSenderId: "15008241574",
  appId: "1:15008241574:web:8464d9b229b2de35dda167",
  measurementId: "G-DPD07Z93SQ"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

export {auth};
export default db;