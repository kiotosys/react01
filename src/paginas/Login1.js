// Login.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase';

function Login1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInicioSesion = async () => {
    try {
      const auth = firebaseApp.auth();
      await signInWithEmailAndPassword(auth, email, password);
      // El usuario inició sesión con éxito
    } catch (error) {
      // Manejar errores de inicio de sesión, como credenciales incorrectas
    }
  }

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleInicioSesion}>Iniciar Sesión</button>
    </div>
  );
}

export default Login1;