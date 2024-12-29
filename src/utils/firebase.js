// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsi2Gstf90MtxYep_MbOc6NQsHTE0UAl8",
  authDomain: "netflix-gpt-1f508.firebaseapp.com",
  projectId: "netflix-gpt-1f508",
  storageBucket: "netflix-gpt-1f508.appspot.com",
  messagingSenderId: "372702972693",
  appId: "1:372702972693:web:5cb67030f0e376f247371c",
  measurementId: "G-D4PRS969GT"
};


// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();