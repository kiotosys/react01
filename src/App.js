// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Rutas from './rutas/Rutas';
import BarraNavegacion from './rutas/BarraNavegacion';
//import AppLista from './protegido/AppLista';

function App() {
  return (
    <div style={{ width:"350px", background:"yellow", padding:"10px"}}>
      <Router >
        <BarraNavegacion />
        <Rutas />
      </Router>
    </div>
  );
}

export default App;
