import React, { useState } from 'react';
import FormBudget from './FormBudget';
import { toggleForm } from '../utils/utils';
import { API_URI } from '../config/config';
import axios from 'axios';


const AbmTable = ({tableName, categoryType, handleDelete, onSubmitEdit}) => { 

  const [editRegistry, setEditRegistry] = useState({});
  const [registryId, setRegistryId] = useState(''); 

  function handleEditClick(registry) {
    
    toggleForm(`form-${tableName}`);
    setRegistryId(registry['_id']);

    delete registry['_id'];
    delete registry['__v'];

    setEditRegistry(registry);
  }

  function handleSubmitEdit(values){  
    const updateRegister = async () => {
      try {
        await axios.put(`${API_URI}/registry/${registryId}`, values);         
      } catch(err) {        
        if(err) {
          throw new Error(err.message);
        }
      }       
    }    
    updateRegister();
    console.log('submit')
    onSubmitEdit(0);
    toggleForm(`form-${tableName}`);
  }
     
  return ( 
    <div className="table">       
      <table> 
        <thead>
          <tr>
            <th colSpan="4">{tableName}</th>
          </tr>
        </thead>       
        <tbody>
            <tr>
              <th colSpan="2">Concepto</th>
              <th className="date">Fecha</th>
              <th>Monto</th>
            </tr>
          { categoryType.map( r => {
            return (                         
              <tr key={r['_id']}> 
                <td className={r.type + ' td-btn'} >                          
                  {r.concern}                              
                </td>
                <td>
                  <div>                  
                    <button 
                      className="edit"
                      onClick={ () => handleEditClick(r) }
                    > 
                      Editar
                    </button>
                    <button 
                      onClick={ () => { handleDelete(r['_id']) }} 
                      className="delete"
                    >
                      Borrar
                    </button>
                  </div> 
                </td>   
                <td className={r.type + ' date'}>
                { 
                  `${r.date.substring(8, 10)}/${r.date.substring(5, 7)}/${r.date.substring(0, 4)}`                      
                }  
                </td>                                                
                <td>
                  $ {r.amount.toFixed(2)}  
                </td>                                                
              </tr>                        
            )
          })
          }       
        </tbody>               
      </table>    
      <FormBudget 
        initialValuesEdit={editRegistry}
        id={`form-${tableName}`}
        isCreate={false}
        onHandleSubmit={ handleSubmitEdit }
      /> 
    </div>
  )
}

export default AbmTable
