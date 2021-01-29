import React, { useEffect, useState } from 'react';
import FormBudget from './FormBudget';
import { API_URI } from '../config/config';
import axios from 'axios';
import TableContainer from './TableContainer';
import { toggleForm } from '../utils/utils';

const AbmPage = () => {

  const [registries, setRegistries] = useState([]);
  const [pageCount, setPageCount] = useState(0);
   
  function pageIncrement() {
    setPageCount(pageCount + 1);    
  }

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
    
    getAllRegistries();     

  }, [pageCount]);

  function handleSubmit( values ) {

    let { date } = values;
    //If no date is submitted, create a new one
    if ( date === '') {
      values = { ...values , date: new Date() }       
    }

    const createRegister = async (obj) => {
      try {
        await axios.post(`${API_URI}/registry`, obj);
      } catch(err) {        
        if(err) {
          throw new Error(err.message);
        }
      }       
    }    
    createRegister(values);
    toggleForm("create-form");    
    pageIncrement();
  } 
  
  function handleCreateClick() {
    toggleForm("create-form");
  }   

  function handleDeleteClick(id) {
    const deleteRegister = async (id) => {
      try {
        await axios.delete(`${API_URI}/registry/${id}`); 
        
      } catch(err) {        
        if(err) {
          throw new Error(err.message);
        }
      }       
    }    
    deleteRegister(id);
    pageIncrement();
  }

  return (
    <div className="main-content abm">
      <h3>Administración Basada en Actividad</h3>
      <div className="create-btn-container" href="form">
        <button onClick={ handleCreateClick } className="create">Crear</button>
      </div>
      <FormBudget 
        id="create-form"
        onHandleSubmit={ handleSubmit }
        isCreate={true}       
      />      
      <TableContainer
        onSubmitEdit={setPageCount}         
        allRegistries={ registries } 
        onhandleDeleteClick={ handleDeleteClick }
      />
    </div>
  )
}

export default AbmPage;