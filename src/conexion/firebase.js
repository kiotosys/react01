// Importa las funciones que necesitas desde los SDK de firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Agregue SDK para los productos de Firebase que desee usar
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyCB0v9CxG4t6c_XbozIaCMlFDFaDHXs20Y",
  authDomain: "myapp04a.firebaseapp.com",
  projectId: "myapp04a",
  storageBucket: "myapp04a.appspot.com",
  messagingSenderId: "636407006784",
  appId: "1:636407006784:web:6a4f3650bf4131afee81a5",
  measurementId: "G-C1S6H3VPWV"
};

// Initializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exportar los servicios
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);


/*
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
const auth = getAuth(firebaseApp);

export { auth };
*/
/*
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);
*/