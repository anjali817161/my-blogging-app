// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJhz82Vh6CCHrsOnGNdr3JDu2zuBwqzBM",
    authDomain: "blog-app-a49d5.firebaseapp.com",
    projectId: "blog-app-a49d5",
    storageBucket: "blog-app-a49d5.appspot.com",
    messagingSenderId: "815195017306",
    appId: "1:815195017306:web:5393bd2343704821f40863"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
