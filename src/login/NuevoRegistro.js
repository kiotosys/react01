// NuevoRegistro.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../conexion/firebase';

function NuevoRegistro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNuevoRegistro = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario se regsitro con éxito");
    } catch (error) {
      // Manejar errores como: contraseñas débil o correo en uso
    }
  }
 
  return (
    <div>
      <h1>Nuevo Registro</h1>
      <input onChange={(e) => setEmail(e.target.value)} value={email} 
        type="email" placeholder="Correo Electrónico" /> <br />
      <input onChange={(e) => setPassword(e.target.value)} value={password} 
        type="password" placeholder="Contraseña"  /> <br />
      <button onClick={handleNuevoRegistro}>Registrarse</button>
    </div>
  );
}

export default NuevoRegistro;
