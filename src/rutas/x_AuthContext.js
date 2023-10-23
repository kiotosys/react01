/*

import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../conexion/firebase'; // Importa la instancia de Firebase Auth

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Configura un efecto para escuchar cambios en la autenticación.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // Limpia el efecto al desmontar el componente.
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

*/