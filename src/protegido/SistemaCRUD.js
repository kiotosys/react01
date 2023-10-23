// SistemaCRUD.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import AppLista from './AppLista';

function SistemaCRUD() {
  return (
    <div>
      <h2>Sistema CRUD</h2>
      <AppLista></AppLista>
      <Outlet /> {/* Donde se renderizarán las rutas secundarias */}
    </div>
  );
}

export default SistemaCRUD;