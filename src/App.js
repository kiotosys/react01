// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { AuthProvider } from './paginas/AuthContext';
import Rutas from './paginas/Rutas';
import Home from './paginas/Home';


function App() {
  return (
    
    <AuthProvider>
      <Router>
        <Routes>
          
          <Route path="/inicio" component={Home} />
          <Rutas />
          
        </Routes>
      </Router>
    </AuthProvider>

  );
}

export default App;
