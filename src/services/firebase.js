// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx3PHXCLHmBGJxLllhVgmNZzM2agOGqvE",
    authDomain: "prueba-firebase-2e50b.firebaseapp.com",
    projectId: "prueba-firebase-2e50b",
    storageBucket: "prueba-firebase-2e50b.appspot.com",
    messagingSenderId: "610819199293",
    appId: "1:610819199293:web:7780c2269370c677e9b554"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();