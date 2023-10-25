import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../conexion/firebase';

const AppForm = (props) => {

  ////////////////// MANEJAR INGRESO DE DATOS ///////////
  const handleStatusChange = (e) => { //Manejar cambios
    //e.target        //obtiene camposRegistro (objeto)
    //e.target.value  //obtiene valor por cada tipeo
    //{name, value}   //obtiene (name:'nombre', value:'xx')
    //{...objeto, [name]:value }  //En Objeto se acumula c/t
    const {name, value} = e.target;
    setObjeto({...objeto, [name]:value});
    console.log(objeto);
  }

  ////////////////// GUARDAR-ACTUALIZAR /////////////////
  const camposRegistro = { nombre:"", edad:"", genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);

  const handleSubmit = (e) => {   //Manejar submit
    e.preventDefault();

    try {
      if(props.idActual == ""){
        if(validarForm()){
          addDoc(collection(db, 'persona'), objeto);
          console.log("Se registro con éxito...");
        }else{
          console.log("NO se guardo...");
        }      
      }else{
        console.log("ACTUALIZAR REGISTRO...");
      }
      
    } catch (error) {
      console.error();
    }
  }

  const validarForm = () => {
    if(objeto.nombre === ""){
       alert("Escriba nombre...");
       return false;
    }
    return true;
  };

  return (
    <div style={{ background:"orange", padding:"10px" }}>
      <h1>AppForm.js</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleStatusChange} value={objeto.nombre} 
            name='nombre' type='text' placeholder='Nombres...' /> <br />
        <input onChange={handleStatusChange} value={objeto.edad} 
            name='edad' type='text' placeholder='Edad...' /> <br />
        <select onChange={handleStatusChange} value={objeto.genero} name='genero' >
          <option value="">Seleccione...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select> <br />
        <button>
          Guardar/Actualizar
        </button>
      </form>
    </div>
  )
}

export default AppForm;
