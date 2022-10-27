import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDHjOqbDjA_Zbt8o2BRBcHmaVz7A5HIJoQ",
  authDomain: "pitura-81d47.firebaseapp.com",
  projectId: "pitura-81d47",
  storageBucket: "pitura-81d47.appspot.com",
  messagingSenderId: "59453422665",
  appId: "1:59453422665:web:1e30f9b486cd83069a5398",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var DB = firebase.firestore();
export { firebase, DB };
