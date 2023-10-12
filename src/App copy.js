import logo from './logo.svg';
import './App.css';
//import { Route, Router } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Dashboard from './paginas/Dashboard';
import Login from './paginas/Login';

function App() {
  return (


    
    <Router>
      <div>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/login' Component={Login} />
        </Routes>
      </div>
    </Router>
    
/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
  );
}

export default App;
