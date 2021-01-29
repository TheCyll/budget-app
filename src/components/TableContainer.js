import React, { useEffect, useState } from 'react';
import AbmTable from './AbmTable';

const TableContainer = ({allRegistries, onhandleDeleteClick, onSubmitEdit}) => {
  
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
        onSubmitEdit={ onSubmitEdit }
        handleDelete={ onhandleDeleteClick }        
      />
      <AbmTable 
        tableName="Egresos" 
        categoryType={outcomes} 
        onSubmitEdit={ onSubmitEdit }
        handleDelete={ onhandleDeleteClick }        
      />
    </div>
  )
}

export default TableContainer
