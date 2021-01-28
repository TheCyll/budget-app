import React, { useEffect, useState } from 'react';
import { API_URI } from '../config/config';
import axios from 'axios';

const App = () => {

  const [registries, setRegistries] = useState([]);  
  const [balance, setBalance] = useState();
  const [lastRegistries, setLastRegistries] = useState([]);

  useEffect(() => {
    const getAllRegistries = async () => {
      try {
        const { data } = await axios.get(`${API_URI}/registry`);
        setRegistries( data.data );        
      } catch(err) {        
        if(err) {
          throw new Error(err.message);
        }
      }       
    }    
    getAllRegistries();
    
  }, []);

  useEffect(() => {

    if (registries.length > 0) { 

      const sumAmount = registries.reduce( (acc, curr) => { 
        if(curr.type === "income") {
          return acc + curr.amount;
        } else {
          return acc - curr.amount; 
        }
      }, 0); 
      
      setBalance( sumAmount.toFixed(2) );
      setLastRegistries( registries.reverse().slice(0, 10) );
    } 
  }, [registries]);  

  return (
    <div className="main-content">
      <div className="financial-report">
        <h3>Balance Actual</h3>
        <span className="balance"><strong>$ { balance }</strong></span>
      </div>
      <div className="last-registries">
        <h3>Últimos 10 registros</h3>
        <table>
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Fecha</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
          { lastRegistries.map( r => {              
              return (
                <tr  key={r["_id"]} >
                  <td className={r.type}>{r.concern}</td> 
                  <td className={r.type}>
                  { 
                    `${r.date.substring(8, 10)}/${r.date.substring(5, 7)}/${r.date.substring(0, 4)}`                      
                  }
                  </td>
                  {r.type === "income" && <td className={r.type} >+ $ {r.amount.toFixed(2)}</td>}     
                  {r.type === "outcome" && <td className={r.type} >- $ {r.amount.toFixed(2)}</td>} 
                </tr>
              )
            })
          } 
          </tbody>                         
        </table>
      </div>
    </div>
  )
}

export default App;