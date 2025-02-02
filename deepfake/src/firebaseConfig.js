import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqG0zGGoj2b6pdprbWZyciULjOU6tsxJo",
  authDomain: "deepfakedetetction.firebaseapp.com",
  projectId: "deepfakedetetction",
  storageBucket: "deepfakedetetction.appspot.com", // Fixed storageBucket
  messagingSenderId: "773892164798",
  appId: "1:773892164798:web:5f4153fcb8008df3ce62ef",
  measurementId: "G-CPHWPE6XDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Ensure Firebase Auth is initialized

export { auth };
