// AuthContext.js

import React, { useContext, useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../conexion/firebase';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
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

/*
//Semejante o equivalente

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router'; // Importa useNavigate desde 'react-router'
import { auth } from '../conexion/firebase';

const AuthContext = ({ children }) => {
  const navigate = useNavigate(); // Utiliza useNavigate para la navegación
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
      } else {
        navigate('/home'); // Utiliza navigate para redirigir si el usuario no está autenticado
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return usuario ? children : null;
}

export default AuthContext
*/