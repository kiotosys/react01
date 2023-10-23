import React, { useState } from 'react'
import { db } from '../conexion/firebase';

const AppForm = () => {
  ////////////////// GUARDAR-ACTUALIZAR /////////////////
  const camposRegistro = { nombre:"", edad:"", genero:""};
  //const camposRegistro = {nombre:"", edad:"", genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);


  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if(db){
        console.log("Se registro con éxito...");
      }else{
        console.log("No se registro...");
      }      
    } catch (error) {
      console.error();
    }

  }

  const handleStatusChange = (e) => {
    console.log(e.target.value);
    

  }

  return (
    <div style={{ background:"orange", padding:"10px" }}>
      <h1>AppForm.js</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleStatusChange} value={objeto.nombre} name='nombre' type='text' placeholder='Nombres...' /> <br />
        <input placeholder='Edad...' /> <br />
        <input placeholder='Género...' /> <br />
        <button>Guardar/Actualizar</button>
      </form>
    </div>
  )
}

export default AppForm
