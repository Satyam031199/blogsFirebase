import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6jU2pjHuQ3l_K177QgbofiVkGcWUKJ8Q",
  authDomain: "blogsdb-63c5c.firebaseapp.com",
  projectId: "blogsdb-63c5c",
  storageBucket: "blogsdb-63c5c.appspot.com",
  messagingSenderId: "228338898155",
  appId: "1:228338898155:web:496439ba008b9b2a53daae",
  measurementId: "G-0D429MDP1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);