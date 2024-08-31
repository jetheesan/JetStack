// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
import dotenv from 'dotenv';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

dotenv.config();


export const firebaseConfig = {
    apiKey: process.env.JETSTACK_FIREBASE_API_KEY,
    authDomain: process.env.JETSTACK_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.JETSTACK_FIREBASE_PROJECT_ID,
    storageBucket: process.env.JETSTACK_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.JETSTACK_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.JETSTACK_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export the Firebase auth and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
