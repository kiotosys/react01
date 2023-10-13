// Registro.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importa auth desde firebase.js

/*
import React, { useState } from 'react';
//import { createUserWithEmailAndPassword } from 'firebase/auth';
//import firebaseApp from '../firebase';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase';
*/
function Registro() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleRegistro = async () => {
    try {
      //const auth = getAuth(firebaseApp);
      //const auth = firebaseApp.auth();
      await createUserWithEmailAndPassword(auth, correo, contraseña);
      console.log("El usuario se regsitro con éxito");
      // El usuario se registró con éxito
    } catch (error) {
        console.error('Error de registro:', error);
      // Manejar errores de registro, como contraseñas débiles o correo electrónico en uso
    }
  }

  return (
    <div>
      <h2>Registro</h2>
      <input type="email" placeholder="Correo Electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
}

export default Registro;
