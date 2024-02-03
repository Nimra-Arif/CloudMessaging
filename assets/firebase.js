// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB73jZlqYosUpI9DmrSSTnM-BvBG9gWwX4",
    authDomain: "chatapp-firebase-25c79.firebaseapp.com",
    projectId: "chatapp-firebase-25c79",
    storageBucket: "chatapp-firebase-25c79.appspot.com",
    messagingSenderId: "884595770751",
    appId: "1:884595770751:web:e0983af171ecf30410864a"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);