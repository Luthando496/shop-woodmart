// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4rEbbVoBG8BptqLiE5rgsn_Xs3zxpKOY",
  authDomain: "shopi-62702.firebaseapp.com",
  projectId: "shopi-62702",
  storageBucket: "shopi-62702.appspot.com",
  messagingSenderId: "1096598830786",
  appId: "1:1096598830786:web:7d2d96705164c7b5a8855b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);