// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
import dotenv from 'dotenv';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyDpytDQb5fcHFRsLiLYJ73ccI6mQ1PZ_bU",
    authDomain: "jetstack-1d850.firebaseapp.com",
    projectId: "jetstack-1d850",
    storageBucket: "jetstack-1d850.firebasestorage.app",
    messagingSenderId: "686095163272",
    appId: "1:686095163272:web:7e3c058c3daea74936243d"
  };

// export const firebaseConfig = {
//     apiKey: process.env.JETSTACK_FIREBASE_API_KEY,
//     authDomain: process.env.JETSTACK_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.JETSTACK_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.JETSTACK_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.JETSTACK_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.JETSTACK_FIREBASE_APP_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export the Firebase auth and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app