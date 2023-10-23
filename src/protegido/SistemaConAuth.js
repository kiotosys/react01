import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Outlet } from 'react-router-dom'; // Importa useNavigate desde 'react-router'
import { auth } from '../conexion/firebase';
import AppLista from './AppLista';

const SistemaConAuth = () => {
    const navigate = useNavigate(); // Utiliza useNavigate para la navegación
    const [usuario, setUsuario] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // El usuario ha iniciado sesión con éxito.
          setUsuario(user);
        } else {
          // El usuario no ha iniciado sesión. Puedes redirigirlo a la página de inicio de sesión.
          navigate('/inicio-sesion');
        }
      });
  
      return () => unsubscribe();
    }, [navigate]);
  
    const handleCerrarSesion = () => {
      // Maneja el cierre de sesión
      signOut(auth);
      navigate('/inicio-sesion'); // Redirige al usuario a la página de inicio de sesión después del cierre de sesión.
    };
  
    if (!usuario) {
      // Si el usuario no ha iniciado sesión, puedes mostrar un mensaje o componente de carga.
      return <div>Cargando...</div>;
    }
  
    return (
      <div>
        <h2>Sistema CRUD</h2>
        <AppLista />
        <Outlet /> {/* Donde se renderizarán las rutas secundarias */}
        <button onClick={handleCerrarSesion}>Cerrar Sesión</button>
      </div>
    );
}

export default SistemaConAuth;
