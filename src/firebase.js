// firebase.js

import { initializeApp } from 'firebase/app';

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
  //const bdapp = initializeApp(firebaseConfig);
  //export default bdapp;
  //const analytics = getAnalytics(app);

  const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;