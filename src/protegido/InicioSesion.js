//InicioSesion.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../conexion/firebase'; // Importa el objeto auth desde tu archivo de configuración de Firebase
import { useNavigate } from 'react-router';

function InicioSesion() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const navigate = useNavigate(); // Utiliza useNavigate para la navegación

  const handleInicioSesion = async () => {
    try {
      await signInWithEmailAndPassword(auth, correo, contraseña); // Cambio aquí
      navigate('/sistema-crud'); // O cualquier otra ruta protegida
      console.log("Inicio de sesión exitoso");
      // El usuario inició sesión con éxito

    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      // Manejar errores de inicio de sesión, como credenciales incorrectas
    }
  }
 
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Correo Electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <button onClick={handleInicioSesion}>Iniciar Sesión</button>
    </div>
  );
}

export default InicioSesion;