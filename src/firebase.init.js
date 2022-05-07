// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB44QIaJ3sZ6UJJw--qzf3ULKyjlpb8uWA",
  authDomain: "mern-dda0e.firebaseapp.com",
  projectId: "mern-dda0e",
  storageBucket: "mern-dda0e.appspot.com",
  messagingSenderId: "919706089157",
  appId: "1:919706089157:web:8f34a998308e37690aa2ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth