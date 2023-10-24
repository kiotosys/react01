import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Outlet } from 'react-router-dom'; // Importa useNavigate desde 'react-router'
import { auth } from '../conexion/firebase';
import AppLista from './AppLista';

const SistemaConAuth = () => {
    const navigate = useNavigate(); // Usa useNavigate para navegación
    const [usuario, setUsuario] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // El usuario ha iniciado sesión con éxito.
          setUsuario(user);
        } else {
          // El usuario no ha iniciado sesión. 
          navigate('/iniciar-sesion');   //Redirige a inicio de sesión
        }
      });
  
      return () => unsubscribe();
    }, [navigate]);
  
    const handleCerrarSesion = () => {
      // Maneja el cierre de sesión
      signOut(auth);
      navigate('/home'); // Redirige a ...
    };
  
    if (!usuario) {
      // Mensaje mientras carga...
      return <div>Cargando...</div>;
    }
  
    return (
      <div>
        <AppLista />
        <Outlet /> {/* Donde se renderizarán las rutas secundarias */}
        <button onClick={handleCerrarSesion}>Cerrar Sesión</button>
      </div>
    );
}

export default SistemaConAuth;
