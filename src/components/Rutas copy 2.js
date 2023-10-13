// Rutas.js

import React from 'react';
import { Route, Switch, Redirect, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import SistemaCRUD from './SistemaCRUD';
import GaleriaPrivada from './GaleriaPrivada';

function Rutas() {
  return (
    <Routes>
      <Route path='/inicio' component={Inicio} />
      <Route path="/acerca-de" component={AcercaDe} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/sistema-crud" component={SistemaCRUD} />
      <Route path="/galeria-privada" component={GaleriaPrivada} />

      <Route path="/" element={<Inicio />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/sistema-crud" element={<SistemaCRUD />} />
      <Route path="/galeria-privada" element={<GaleriaPrivada />} />
    </Routes>

    
  );
}

export default Rutas;
