// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4e9df.firebaseapp.com",
  projectId: "mern-blog-4e9df",
  storageBucket: "mern-blog-4e9df.appspot.com",
  messagingSenderId: "943962244997",
  appId: "1:943962244997:web:1dac14b92ac0711c8426ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);