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
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Iniciar Sesión</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Correo Electrónico" />
        <Form.Text value={correo} onChange={(e) => setCorreo(e.target.value)} className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={contraseña} onChange={(e) => setContraseña(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button onClick={handleInicioSesion} variant="primary" type="submit">
        Iniciar
      </Button>
    </Form>
    </div>    
  );
}

export default InicioSesion;