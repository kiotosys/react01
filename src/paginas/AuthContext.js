// AuthContext.js

import React, { useContext, useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../firebase';
//import firebaseApp from './firebase';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const auth = firebaseApp.auth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ usuario }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
