// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSXPie0AvD3YlzdESjfgM3IWNxa9lfRsU",
  authDomain: "devtest-cf7d9.firebaseapp.com",
  projectId: "devtest-cf7d9",
  storageBucket: "devtest-cf7d9.appspot.com",
  messagingSenderId: "857209211421",
  appId: "1:857209211421:web:4ba0cb3f2ec86eb438d4f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };