// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0bTvMRLhrJIIfFjMfTJsCKDgLoV8dp0g",
  authDomain: "teachme-75070.firebaseapp.com",
  projectId: "teachme-75070",
  storageBucket: "teachme-75070.appspot.com",
  messagingSenderId: "959987947874",
  appId: "1:959987947874:web:fd020e77d444404c69743b",
  measurementId: "G-24KKXP8G3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
