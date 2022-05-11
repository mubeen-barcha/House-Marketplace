// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe-QjNwLyu6rzeIIFe3GJfTw5NLKsIQVc",
  authDomain: "house-marketplace-app-6b4f4.firebaseapp.com",
  projectId: "house-marketplace-app-6b4f4",
  storageBucket: "house-marketplace-app-6b4f4.appspot.com",
  messagingSenderId: "336065812825",
  appId: "1:336065812825:web:e04c9558653bbf6328d448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()