//import React from 'react'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { navigate } from 'react-router-dom';
import { auth } from '../conexion/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // El usuario ha iniciado sesión con éxito.
          const user = userCredential.user;
    
          // Redirige al usuario a la página "Sistema" después del inicio de sesión.
          navigate('/sistema-crud'); // O cualquier otra ruta protegida
          console.log("Inicio sesion...");
        })
        .catch((error) => {
          // Manejar errores de inicio de sesión, como credenciales incorrectas.
        });
    
/*
    signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
          // El usuario ha iniciado sesión con éxito.
          const user = userCredential.user;
          // Redirige al usuario a la página "Sistema" después del inicio de sesión.
          navigate('/sistema-crud'); // O cualquier otra ruta protegida
       })
       .catch((error) => {
         // Manejar errores de inicio de sesión, como credenciales incorrectas.
       });
       */
  };
  
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <label>
          Correo Electrónico:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default Login
