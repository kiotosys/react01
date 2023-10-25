import React, { useState } from 'react'
import AppForm from './AppForm'
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
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

  ////// Delete ////////////////////
  const [idActual, setIdActual] = useState("");
  const fnDelete = () => {

  }

  return (
    <div style={{ background:"greenyellow", padding:"10px" }}>
      <h1>AppLista.js</h1>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      <p>1. Juan Manuel -------- x --- A </p>
      <p>2. Rosa María --------- x --- A </p>
      <p>3. Ricardo Llerena ---- x --- A </p>
    </div>
  )
}

export default AppLista;