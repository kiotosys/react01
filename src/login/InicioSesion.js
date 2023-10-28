//InicioSesion.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../conexion/firebase'; // Importa el objeto auth 
import { useNavigate } from 'react-router';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function InicioSesion() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const navigate = useNavigate(); // Utiliza useNavigate para la navegación

  const handleInicioSesion = async () => {
    try {
      await signInWithEmailAndPassword(auth, correo, contraseña);
      navigate('/sistema-crud');                // pasa a otra ruta protegida
      console.log("Inicio de sesión exitoso");  // Inició de sesión con éxito

    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      // Manejar errores de inicio de sesión, como credenciales incorrectas
    }
  }
  
  return (
    <div>
    <Form className='card card-body'>
      <Form.Group className="btn btn-primary btn-block" controlId="formBasicEmail">
        <Form.Label>Iniciar Sesión</Form.Label>
      </Form.Group>

      <Form.Label>Correo Electrónico</Form.Label>
      
      <Form.Group className="form-group input-group" controlId="formBasicEmail">
        <div className="input-group-text bd-light">
          <i className='material-icons'>group_add</i>
        </div>
        <input value={correo} onChange={(e) => setCorreo(e.target.value)} 
          className='form-control float-start' type="email" placeholder="Correo Electrónico"  />
      </Form.Group>

      <Form.Label>Password</Form.Label>
      <Form.Group className="form-group input-group" controlId="formBasicPassword">
        <div className="input-group-text bd-light">
          <i className='material-icons'>group_add</i>
        </div>
        <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} 
        className='form-control float-start' type="password" placeholder="Contraseña"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button onClick={handleInicioSesion} variant="primary">
        Iniciar
      </Button>
    </Form>
    </div>    
  );
}

export default InicioSesion;