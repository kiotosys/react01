// firebase.js
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
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
const analytics = getAnalytics(firebaseApp);