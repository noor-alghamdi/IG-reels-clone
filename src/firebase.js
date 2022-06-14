import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBnYPfyAi4sv4GLOM3nK75ttseA4qpXnUs",
  authDomain: "ig-reel-e8b1a.firebaseapp.com",
  projectId: "ig-reel-e8b1a",
  storageBucket: "ig-reel-e8b1a.appspot.com",
  messagingSenderId: "898539827733",
  appId: "1:898539827733:web:b060916193e0376754d41c",
  measurementId: "G-8DN0M0XXVQ",
});
const db = firebaseApp.firestore();
export default db;
