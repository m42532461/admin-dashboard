// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2uLReFcXNBoqFqR8zOk3zFNjCY8o_SGQ",
  authDomain: "shop-abd06.firebaseapp.com",
  projectId: "shop-abd06",
  storageBucket: "shop-abd06.appspot.com",
  messagingSenderId: "729161398560",
  appId: "1:729161398560:web:288888d1b2379e379e7f45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
