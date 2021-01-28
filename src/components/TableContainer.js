import React, { useEffect, useState } from 'react';
import AbmTable from './AbmTable';

const TableContainer = ({allRegistries, onhandleDeleteClick}) => {
  
  const [incomes, setIncomes] = useState([]);
  const [outcomes, setOutcomes] = useState([]); 

  useEffect(() => {

    const incomeRegistries = allRegistries.filter( r => {
      return r.type === "income";
    });
    setIncomes(incomeRegistries);  
    const outcomeRegistries = allRegistries.filter( r => {
      return r.type === "outcome";
    });
    setOutcomes(outcomeRegistries);     
    
  }, [allRegistries]);
  
  

  return (
    <div className="table-container"> 
      <AbmTable 
        tableName="Ingresos" 
        categoryType={incomes} 
        handleDelete={ onhandleDeleteClick }        
      />
      <AbmTable 
        tableName="Egresos" 
        categoryType={outcomes} 
        handleDelete={ onhandleDeleteClick }        
      />
    </div>
  )
}

export default TableContainer
