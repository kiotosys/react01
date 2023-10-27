import React, { useEffect, useState } from 'react'
import AppForm from './AppForm'
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../conexion/firebase';

const AppLista = () => {

  ////// Lectura fnRead ///////////
  const [docBD, setDocBD] = useState([]);
  //console.log(docBD);
  const fnRead = () => {
    const xColeccionConQuery = query(collection(db, 'persona'));
    //const xColeccionConQuery = query(collection(db, "persona"), where("nombre", "!=", ""));
    const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach((doc) => {
        xDoc.push({id: doc.id, ...doc.data()})
      });
      setDocBD(xDoc);
    });
  }
  //console.log(docBD); 

  //fnRead(); //Prueba sin useEffect
  //useEffect(()=>{fnRead();}, [idActual]);
  useEffect(()=>{fnRead();}, []);

  ////// Delete ////////////////////
  const [idActual, setIdActual] = useState("");
  const [i, setI] = useState(1);  //Falta

  const fnDelete = async (xId) => {
    if(window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, 'persona', xId));
      console.log("Se ELIMINO con éxito...");
    }
  }
  //style={{ background:"greenyellow", padding:"10px" }}
  return (
    <div className='container text-center'>
      <div className='card bs-secondary p-3 mt-3'>

        <div className='col-md-12 p-2'>
          <div className='card mb-1'>
            <h1>AppLista.js</h1>
          </div>
        </div>

        <div className='col-md-12 p-2'>
          <div className='card mb-1'>
            <AppForm {...{idActual, setIdActual, fnRead}} />
          </div>
        </div>

        <div className='col-md-12 p-2'>
          {
            docBD.map((row, index) =>  
              <div className='card mb-1' key={row.id} >
                <div className='card-body'>
                  <div className='d-flex justify-content-between'>
                    <h4>No. {index+1}. {row.nombre}</h4>
                    <div>
                      <i className='material-icons text-danger' 
                        onClick={() => fnDelete(row.id)}>close</i>
                        ...
                        <i className='material-icons text-warning' 
                          onClick={() => setIdActual(row.id)}>create</i>
                    </div>
                  </div>
                  <div className='d-flex justify-content'>
                    <span>Edad: {row.edad} </span> ...
                    <a href='#'>Genero: {row.genero} </a>
                  </div>
                </div>
              </div>
            )
         }
        </div>
      </div>
    </div>
  )
}

export default AppLista;