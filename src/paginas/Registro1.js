// Registro.js

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase';

function Registro1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = async () => {
    try {
      const auth = firebaseApp.auth();
      await createUserWithEmailAndPassword(auth, email, password);
      // El usuario se registró con éxito
    } catch (error) {
      // Manejar errores de registro, como contraseñas débiles o correo electrónico en uso
    }
  }

  return (
    <div>
      <h2>Registro</h2>
      <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
}

export default Registro1;
