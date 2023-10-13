// Protegido.js

// Protegido.js

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router'; // Importa useNavigate desde 'react-router'
//import firebaseApp from '../firebase';
import { getAuth } from 'firebase/auth'; // Importa getAuth aquí
import { auth } from '../firebase';

function Protegido({ children }) {
  const navigate = useNavigate(); // Utiliza useNavigate para la navegación
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    //const auth = firebaseApp.auth();

    //const auth = getAuth(firebaseApp);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
      } else {
        navigate('/inicio'); // Utiliza navigate para redirigir si el usuario no está autenticado
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return usuario ? children : null;
}

export default Protegido;

/*
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

function Protegido({ children }) {
  const history = useHistory();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const auth = firebaseApp.auth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
      } else {
        history.push('/inicio'); // Redirigir al inicio si el usuario no está autenticado
      }
    });

    return () => unsubscribe();
  }, [history]);

  return usuario ? children : null;
}

export default Protegido;
*/