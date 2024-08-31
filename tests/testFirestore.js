import dotenv from 'dotenv';
dotenv.config();
console.log('API Key:', process.env.JETSTACK_FIREBASE_API_KEY); //This line to check if the key is being loaded

// Import Firestore functions
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from '../src/services/firebase.js';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testFirestore() {
  try {
    const docRef = await addDoc(collection(db, "testCollection"), {
      testField: "testValue"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

testFirestore();
