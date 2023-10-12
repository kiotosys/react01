import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//import firebase from 'firebase/app';
//import 'firebase/auth';

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

//////////////////////////////////////////
// firebase.js
/*
import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Importa otros servicios de Firebase que necesites

const firebaseConfig = {
  apiKey: "AIzaSyCZ0kXYLLDospUrqacn2B3rGmFT9h58oco",
  authDomain: "app04ae.firebaseapp.com",
  projectId: "app04ae",
  storageBucket: "app04ae.appspot.com",
  messagingSenderId: "419170817523",
  appId: "1:419170817523:web:a539f2ade9ad91e1082e86",
  measurementId: "G-ZDHJEH796Y"
};

//firebase.initializeApp(firebaseConfig);
const bdapp = initializeApp(firebaseConfig);
export default bdapp;
*/
//////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ0kXYLLDospUrqacn2B3rGmFT9h58oco",
  authDomain: "app04ae.firebaseapp.com",
  projectId: "app04ae",
  storageBucket: "app04ae.appspot.com",
  messagingSenderId: "419170817523",
  appId: "1:419170817523:web:a539f2ade9ad91e1082e86",
  measurementId: "G-ZDHJEH796Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/