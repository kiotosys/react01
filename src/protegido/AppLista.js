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
    <div>
      <h1>AppLista.js</h1>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      {
        docBD.map((row, index) =>  
          <p key={row.id} >     
              N.{index+1}. {row.nombre} .....
              <span onClick={() => fnDelete(row.id)}> x </span>
              .....
              <span onClick={() => setIdActual(row.id)}>A</span>
          </p>
        )
      }
    </div>
  )
}

export default AppLista;