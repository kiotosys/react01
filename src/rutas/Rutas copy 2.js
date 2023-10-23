// Rutas.js

import React from 'react';
import { Route, Switch, Redirect, Routes, Router } from 'react-router-dom';

//////////////////////// AUTENTICACIÓN /////////////////
import Registro from '../protegido/Registro'; // Importa el componente de registro
import InicioSesion from '../protegido/InicioSesion'; // Importa el componente de inicio de sesión

//////////////////////// PAG. PROTEGIDA ////////////////
import VerificaAuth from './VerificaAuth'; // El componente que protege las rutas
import SistemaCRUD from '../protegido/SistemaCRUD';
import GaleriaPrivada from '../protegido/GaleriaPrivada';

//////////////////////// PAG. PUBLICOS /////////////////
import Home from '../publico/Home';
import AcercaDe from '../publico/AcercaDe';
import Contacto from '../publico/Contacto';
import AppLista from '../protegido/AppLista';
import { AuthProvider } from './x_AuthProvider';


function SistemaCRUDWrapper() {
  return (
    <div>
      <h2>Sistema CRUD</h2>
      <AppLista />
      <Outlet /> {/* Aquí se renderizarán las rutas secundarias */}
    </div>
  );
}

function Rutas() {
  return (
    <Routes>
      <Route path="/sistema-crud" element={<SistemaCRUDWrapper />}>
        <Route index element={<SistemaCRUD />} />
        <Route path="app-lista" element={<AppLista />} />
      </Route>
    </Routes>
  );
}

function Rutas() {
  return (
    <div style={{ background:"red" }}>
    <Routes >
      <Route path="/home" element={<Home />} />
      <Route path="/acerca-de" element={<AcercaDe />} />

      <Route path="/sistema" element={<VerificaAuth />}>
        <Route index element={<AppLista />} />
      </Route>
      
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/sistema-crud" element={<VerificaAuth />}>
        <Route index element={<SistemaCRUD />} />
      </Route>
      <Route path="/galeria-privada" element={<VerificaAuth />}>
        <Route index element={<GaleriaPrivada />} />
      </Route>      
     
      <Route path="/registro" element={<Registro />} /> {/* Ruta para registro */}
      <Route path="/inicio-sesion" element={<InicioSesion />} /> {/* Ruta para inicio de sesión */}
    </Routes>    
    </div>
  );
}

export default Rutas;
