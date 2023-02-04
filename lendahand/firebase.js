// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5_QeJQq92zP3KcUbbP-TWSGENhUwcPOE",
  authDomain: "lend-a-hand-1.firebaseapp.com",
  projectId: "lend-a-hand-1",
  storageBucket: "lend-a-hand-1.appspot.com",
  messagingSenderId: "205801847986",
  appId: "1:205801847986:web:7f235b221b2a8256181dab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };