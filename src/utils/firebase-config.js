
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvmEjfHd3e7KwnvMmvUHHYpMNmzq-XmgU",
  authDomain: "netflix-clone-d2e4a.firebaseapp.com",
  projectId: "netflix-clone-d2e4a",
  storageBucket: "netflix-clone-d2e4a.appspot.com",
  messagingSenderId: "360426422270",
  appId: "1:360426422270:web:a38acb8e3aaa83a5904aaf",
  measurementId: "G-FTCB8KYPVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);