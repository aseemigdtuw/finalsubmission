import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAVIaYxGy0Q3pM8qRARW_0o7bp8e0bWQuo",
  authDomain: "web-imp-one-fdefd.firebaseapp.com",
  projectId: "web-imp-one-fdefd",
  storageBucket: "web-imp-one-fdefd.appspot.com",
  messagingSenderId: "9001313036",
  appId: "1:9001313036:web:a2d3d4e1f5378c135adf29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();