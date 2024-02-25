// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBlSS84MM_Rahg11W8nDZMkDGj43Vtxz4",
  authDomain: "insta-clone-project-530f3.firebaseapp.com",
  projectId: "insta-clone-project-530f3",
  storageBucket: "insta-clone-project-530f3.appspot.com",
  messagingSenderId: "566378573271",
  appId: "1:566378573271:web:00610dfd1392b370bc6f92",
  measurementId: "G-HY0JBZ7SBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, Auth, firestore, storage, analytics};