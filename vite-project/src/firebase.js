// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ownestate-74140.firebaseapp.com",
  projectId: "ownestate-74140",
  storageBucket: "ownestate-74140.appspot.com",
  messagingSenderId: "657533623392",
  appId: "1:657533623392:web:f211d861dbebfca3773705"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);