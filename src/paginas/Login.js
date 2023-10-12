//import React from 'react'
import React, { useState } from 'react';

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
    // Aquí puedes utilizar Firebase u otro servicio de autenticación
    // para autenticar al usuario con el correo y la contraseña ingresados.
    // Por ejemplo, si usas Firebase, puedes utilizar la función signInWithEmailAndPassword.

    // Ejemplo con Firebase:
    // import { signInWithEmailAndPassword } from 'firebase/auth';
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // El usuario ha iniciado sesión con éxito.
    //     const user = userCredential.user;
    //   })
    //   .catch((error) => {
    //     // Manejar errores de inicio de sesión, como credenciales incorrectas.
    //   });
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
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default Login
