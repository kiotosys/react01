// GaleriaPrivada.js

import React from 'react';
import { Outlet } from 'react-router-dom';

function GaleriaPrivada() {
  return (
    <div>
      <h1>Galería Privada</h1>
      <Outlet /> {/* Donde se renderizarán las rutas secundarias */
      <h4>Página con galeria privada....</h4>
      }
    </div>
  );
}

export default GaleriaPrivada;
