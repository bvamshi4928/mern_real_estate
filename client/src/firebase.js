// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5166d.firebaseapp.com",
  projectId: "mern-estate-5166d",
  storageBucket: "mern-estate-5166d.appspot.com",
  messagingSenderId: "662935598759",
  appId: "1:662935598759:web:7285b250f4411ce328cd82",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
