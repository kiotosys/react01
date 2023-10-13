// Rutas.js

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Agrega Navigate
import { useAuth } from './AuthContext';
import Home from './Home';
import Panel from './Panel';
import Registro1 from './Registro1';
import Login1 from './Login1';

function Rutas() {
  const { usuario } = useAuth();

  return (
    <Routes>
      <Route path="/inicio" element={<Home />} />
      <Route path="/registro" element={<Registro1 />} />
      <Route path="/inicio-sesion" element={<Login1 />} />

      {usuario ? (
        <Route path="/panel" element={<Panel />} />
      ) : (
        // Redirigir a la página de inicio si no hay usuario
        <Navigate to="/inicio" replace />
      )}
    </Routes>
  );
}

export default Rutas;



/*
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Home from './Home';
import Panel from './Panel';
import Registro1 from './Registro1';
import Login1 from './Login1';

function Rutas() {
  const { usuario } = useAuth();

  return (
    <Routes>
      <Route path="/inicio" element={<Home />} />
      <Route path="/registro" element={<Registro1 />} />
      <Route path="/inicio-sesion" element={<Login1 />} />
      
      {usuario ? (
        <Route path="/panel" element={<Panel />} />
      ) : (
        <Route path="/inicio" element={<Home />} />
      )}
    </Routes>
  );
}

export default Rutas;
*/

/*
import React from 'react';
import { Route, Redirect, Router, Routes } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Home from './Home';
import Panel from './Panel';
import Registro1 from './Registro1';
import Login1 from './Login1';

function Rutas() {
  const { usuario } = useAuth();

  return (
    

    <Routes>
      <Route path="/inicio" component={Home} />

      <Route path="/registro" component={Registro1} />
      <Route path="/inicio-sesion" component={Login1} />

      {usuario ? (
        <Route path="/panel" component={Panel} />
      ) : (
        //<Redirect to="/inicio" />
        <Route path="/inicio" component={Home} />
      )}
    </Routes>
      
    
  );
}

export default Rutas;
*/