// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzTBn4BcLParibHpSylZyPcxkAgAVgpWo",
  authDomain: "bookfit-95494.firebaseapp.com",
  projectId: "bookfit-95494",
  storageBucket: "bookfit-95494.firebasestorage.app",
  messagingSenderId: "923995659217",
  appId: "1:923995659217:web:b56bf735b1cd3fe7d5def0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export const auth = getAuth();
