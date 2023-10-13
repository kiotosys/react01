// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Asegúrate de importar getAuth aquí
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZ0kXYLLDospUrqacn2B3rGmFT9h58oco",
  authDomain: "app04ae.firebaseapp.com",
  projectId: "app04ae",
  storageBucket: "app04ae.appspot.com",
  messagingSenderId: "419170817523",
  appId: "1:419170817523:web:a539f2ade9ad91e1082e86",
  measurementId: "G-ZDHJEH796Y"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Asegúrate de obtener el objeto auth aquí
export { firebaseApp, auth, getAnalytics }; // Exporta auth para que esté disponible en otros archivos