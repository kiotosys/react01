// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { AuthProvider } from './rutas/AuthContext';
import BarraNavegacion from './rutas/BarraNavegacion';
import Rutas from './rutas/Rutas';

function App() {
  return (
    <div style={{ width:"350px", background:"violet", padding:"10px" }} >
      <Router >
        <AuthProvider >
          <BarraNavegacion />
          <Rutas />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
