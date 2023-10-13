//InicioSesion.js


import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase';

function InicioSesion() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleInicioSesion = async () => {
    try {
      const auth = firebaseApp.auth();
      await createUserWithEmailAndPassword(auth, correo, contraseña);
      // El usuario se registró con éxito
    } catch (error) {
      // Manejar errores de InicioSesion, como contraseñas débiles o correo electrónico en uso
    }
  }

  return (
    <div>
      <h2>InicioSesion</h2>
      <input type="email" placeholder="Correo Electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <button onClick={handleInicioSesion}>Iniciar Sesión</button>
    </div>
  );
}

export default InicioSesion;
