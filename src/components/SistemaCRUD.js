// SistemaCRUD.js

import React from 'react';
import { Outlet } from 'react-router-dom';

function SistemaCRUD() {
  return (
    <div>
      <h2>Sistema CRUD</h2>
      <Outlet /> {/* Donde se renderizarán las rutas secundarias */}
    </div>
  );
}

export default SistemaCRUD;

/*
import React from 'react'

const SistemaCRUD = () => {
  return (
    <div>
      <h1>SistemaCRUD</h1>
      Página de SistemaCRUD
    </div>
  )
}

export default SistemaCRUD
*/