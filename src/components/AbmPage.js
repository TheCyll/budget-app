import React, { useEffect, useState } from 'react';
import FormBudget from './FormBudget';
import { API_URI } from '../config/config';
import axios from 'axios';
import TableContainer from './TableContainer';
import { toggleForm } from '../utils/utils';

const AbmPage = () => {

  const [registries, setRegistries] = useState([]);
  

  useEffect(() => {
    const getAllRegistries = async () => {
      try {        
        const { data } = await axios.get(`${API_URI}/registry`);
        setRegistries( data.data.reverse() );        
      } catch(err) {        
        if(err) {
          throw new Error(err.message);
        }
      }       
    }
    let mounted = true;
    if( mounted ) {
      getAllRegistries();
    }

    return () => {
      mounted = false;
    }

  }, [registries]);

  function handleSubmit( values ) {

    let { date } = values;
    if ( date === '') {
      values = { ...values , date: new Date() }       
    }

    const createRegister = async (obj) => {
      try {
        const { data } = await axios.post(`${API_URI}/registry`, obj);
        console.log(data)
        
      } catch(err) {        
        if(err) {
          throw new Error(err.message);
        }
      }       
    }    
    createRegister(values);
    toggleForm("create-form");
  } 
  
  function handleCreateClick() {
    toggleForm("create-form");
  }   

  function handleDeleteClick(id) {
    const deleteRegister = async (id) => {
      try {
        const { data } = await axios.delete(`${API_URI}/registry/${id}`); 
        
      } catch(err) {        
        if(err) {
          throw new Error(err.message);
        }
      }       
    }    
    deleteRegister(id);
  }

  

  return (
    <div className="main-content abm">
      <h3>Administración Basada en Actividad</h3>
      <div className="create-btn-container" href="form">
        <button onClick={ handleCreateClick } className="create">Crear</button>
      </div>
      <FormBudget 
        onHandleSubmit={ handleSubmit }        
        id="create-form"
      />      
      <TableContainer         
        allRegistries={ registries } 
        onhandleDeleteClick={ handleDeleteClick }
      />
    </div>
  )
}

export default AbmPage;