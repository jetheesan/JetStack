import dotenv from 'dotenv';
dotenv.config();
console.log('API Key:', process.env.JETSTACK_FIREBASE_API_KEY); //This line to check if the key is being loaded



// Import Firebase functions
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword }from 'firebase/auth';
import { firebaseConfig } from '../src/services/firebase.js';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Test Firebase Authentication
const testAuth = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, 'jet@test.com', 'passw0rd123!');
    console.log('User signed in:', userCredential.user);
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

testAuth();
