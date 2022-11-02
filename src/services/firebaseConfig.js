// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCdo8HOzccQ3iRvzvwNz4URkTuDXU3AKiE",
  authDomain: "learning-reactjs-98352.firebaseapp.com",
  projectId: "learning-reactjs-98352",
  storageBucket: "learning-reactjs-98352.appspot.com",
  messagingSenderId: "460295277789",
  appId: "1:460295277789:web:7c3a2f137a7aa672565f34"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)