// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
//import { AuthProvider } from './paginas/AuthContext';
import Rutas from './components/Rutas';
import Home from './paginas/Home';


function App() {
  return (
    <Router>
      <AuthProvider> {/* Envuelve tus rutas con AuthProvider */}
        <Rutas />
      </AuthProvider>
    </Router>
    
    /*
    <div>
      Hola
    </div>
    */
    /*
    <AuthProvider>
      <Router>
        <Routes>
          
          <Route path="/inicio" component={Home} />
          <Rutas />
          
        </Routes>
      </Router>
    </AuthProvider>
*/
  );
}

export default App;
