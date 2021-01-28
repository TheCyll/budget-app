import React from 'react';
import FormBudget from './FormBudget';
import { toggleForm } from '../utils/utils';


const AbmTable = ({tableName, categoryType, handleDelete}) => { 
     

  function handleEdit(v) {
    console.log(v)
    
  }
  

  return (        
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
                  <div className="edit-container">
                    <FormBudget 
                      id={r._id}
                      classNameEdit="edit-form"
                      onHandleSubmit={ () =>{ handleEdit(r._id) } }
                    />
                  </div>
                  <button 
                    className="edit"
                    onClick={ () => { toggleForm(r._id) } }
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
  )
}

export default AbmTable
