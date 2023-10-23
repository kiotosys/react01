// Protegido.js

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router'; // Importa useNavigate desde 'react-router'
import { auth } from '../conexion/firebase';

const VerificaAuth = ({ children }) => {
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

export default VerificaAuth
