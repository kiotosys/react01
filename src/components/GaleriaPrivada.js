// GaleriaPrivada.js

import React from 'react';
import { Outlet } from 'react-router-dom';

function GaleriaPrivada() {
  return (
    <div>
      <h2>Galería Privada</h2>
      <Outlet /> {/* Donde se renderizarán las rutas secundarias */}
    </div>
  );
}

export default GaleriaPrivada;
