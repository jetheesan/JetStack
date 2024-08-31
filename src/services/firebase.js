// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyC_sDkzUBQnm2EoqS01hphAc1v5E3pKXz4",
    authDomain: "jetstack-281bf.firebaseapp.com",
    projectId: "jetstack-281bf",
    storageBucket: "jetstack-281bf.appspot.com",
    messagingSenderId: "655843431045",
    appId: "1:655843431045:web:1ae71ea06e9f50d1838fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export the Firebase auth and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
