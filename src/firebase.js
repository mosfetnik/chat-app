// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//texer config
// const firebaseConfig = {
//   apiKey: "AIzaSyAeoIfR6fVsPPtxn7QiKyob42bB4A0GIwo",
//   authDomain: "texer-56b1c.firebaseapp.com",
//   projectId: "texer-56b1c",
//   storageBucket: "texer-56b1c.appspot.com",
//   messagingSenderId: "889957614082",
//   appId: "1:889957614082:web:64841dbd09da7744115d1b"
// };


// chat app config file 
const firebaseConfig = {
  apiKey: "AIzaSyDLTKcmE9pbxddextgoH0JfSlR6srFGcuY",
  authDomain: "chat-app-6b807.firebaseapp.com",
  projectId: "chat-app-6b807",
  storageBucket: "chat-app-6b807.appspot.com",
  messagingSenderId: "1067444081873",
  appId: "1:1067444081873:web:dbdb4f00821db862b5e1f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)



