// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDd0RaRaqSFSasj3rP63BFiSYili393PHk",
  authDomain: "notes-app-c91b4.firebaseapp.com",
  projectId: "notes-app-c91b4",
  storageBucket: "notes-app-c91b4.appspot.com",
  messagingSenderId: "837842454853",
  appId: "1:837842454853:web:5c695d556bf40bc762162c",
  measurementId: "G-X8M9D1N3NB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
