// Rutas.js

import React from 'react';
import { Route, Switch, Redirect, Routes, Router, Outlet } from 'react-router-dom';

//////////////////////// AUTENTICACIÓN /////////////////
import NuevoRegistro from '../login/NuevoRegistro';
import InicioSesion  from '../login/InicioSesion';

//////////////////////// PAG. PROTEGIDA ////////////////
import SistemaConAuth from '../protegido/SistemaConAuth';
import AppLista       from '../protegido/AppLista';
import GaleriaPrivada from '../protegido/GaleriaPrivada';

//////////////////////// PAG. PUBLICOS /////////////////
import Home     from '../publico/Home';
import AcercaDe from '../publico/AcercaDe';
import Contacto from '../publico/Contacto';

function SistemaCRUDWrapper() {
  return (
    <div>
      <Outlet /> {/* Aquí se renderizarán las rutas secundarias */}
    </div>
  );
}
//style={{ background:"greenyellow" }}
function Rutas() {
  return (
    <div>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
      <Route path="/contacto" element={<Contacto />} />
      
      <Route path="/sistema-crud" element={<SistemaCRUDWrapper />}>
        <Route index element={<SistemaConAuth />} />
        <Route path="app-lista" element={<AppLista />} />
      </Route>

      <Route path="/nuevo-registro" element={<NuevoRegistro />} /> 
      <Route path="/iniciar-sesion" element={<InicioSesion />} />
    </Routes>  
    </div>
  );
}

export default Rutas;
