// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBnErfDVMvYg8KdOujhCoYzmbfegZI1Z-I",
  authDomain: "wheres-waldo-53320.firebaseapp.com",
  projectId: "wheres-waldo-53320",
  storageBucket: "wheres-waldo-53320.appspot.com",
  messagingSenderId: "1078283849042",
  appId: "1:1078283849042:web:3e95e710fb2f0be6247e8b",
  measurementId: "G-M3JV1QC326",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
