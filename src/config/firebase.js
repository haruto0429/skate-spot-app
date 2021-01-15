import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBKomyPIaAMPF1iYfzE2gOwmK7KOuo9R7o",
    authDomain: "cafeapp-a96a0.firebaseapp.com",
    projectId: "cafeapp-a96a0",
    storageBucket: "cafeapp-a96a0.appspot.com",
    messagingSenderId: "188511770835",
    appId: "1:188511770835:web:8a0210c986930cd6315c26",
    measurementId: "G-VSMVRMEEN9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();