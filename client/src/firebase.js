// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-22990.firebaseapp.com",
  projectId: "mernestate-22990",
  storageBucket: "mernestate-22990.appspot.com",
  messagingSenderId: "113884446815",
  appId: "1:113884446815:web:f4e87f9d8f01ef15679bea",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
