// Rutas.js

import React from 'react';
import { Route, Switch, Redirect, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import SistemaCRUD from './SistemaCRUD';
import GaleriaPrivada from './GaleriaPrivada';
import Protegido from './Protegido'; // El componente que protege las rutas

import Registro from './Registro'; // Importa el componente de registro
import InicioSesion from './InicioSesion'; // Importa el componente de inicio de sesión


function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
      <Route path="/react01/contacto" element={<Contacto />} />
      <Route path="/sistema-crud" element={<SistemaCRUD />} />

      <Route path="/sistema-crud" element={<Protegido />}>
        <Route index element={<SistemaCRUD />} />
      </Route>
      <Route path="/galeria-privada" element={<GaleriaPrivada />} />

      <Route path="/registro" element={<Registro />} /> {/* Ruta para registro */}
      <Route path="/inicio-sesion" element={<InicioSesion />} /> {/* Ruta para inicio de sesión */}
      
    </Routes>    
  );
}

export default Rutas;
