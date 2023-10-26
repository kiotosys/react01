import React, { useState } from 'react'
import AppForm from './AppForm'
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../conexion/firebase';

const AppLista = () => {

  ////// Lectura fnRead ///////////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
    const xColeccionConQuery = query(collection(db, 'persona'));
    const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach((doc) => {
        xDoc.push({id: doc.id, ...doc.data()})
      });
      setDocBD(xDoc);
    });
  }

  fnRead(); //Prueba sin useEffect

  ////// Delete ////////////////////
  const [idActual, setIdActual] = useState("");
  const [i, setI] = useState(0);

  const fnDelete = async (xId) => {
    if(window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, 'persona', xId));
      console.log("Se ELIMINO con éxito...");
    }
  }

  return (
    <div style={{ background:"greenyellow", padding:"10px" }}>
      <h1>AppLista.js</h1>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      {
        docBD.map((p) =>  
          <p key={p.id} >     
              No.  {i} {p.nombre} .....
              <span onClick={() => fnDelete(p.id)}> x </span>
              .....
              <span onClick={() => setIdActual(p.id)}>A</span>
          </p>
        )
      }
    </div>
  )
}

export default AppLista;