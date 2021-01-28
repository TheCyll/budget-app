import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormBudget = ({id, classNameEdit,onHandleSubmit}) => { 
  
  return (
    <Formik 
      initialValues={{
        concern: '',
        amount: '',
        date: '',
        type: ''        
      }}
      validationSchema={Yup.object({
        concern: Yup.string().trim().max(50, 'Debe tener 50 carácteres o menos').required('El campo es requerido'),
        amount: Yup.number().min(0, 'Debe ser un número positivo').required('El campo debe ser un número'),
        date: Yup.date(),
        type: Yup.string().oneOf(['income', 'outcome']).required('El campo es requerido')        
      })}
      onSubmit={(values, { setSubmitting }) => {
        onHandleSubmit(values);        
        setSubmitting(false);
      }} 
    >
      <Form id={id} className={ classNameEdit + " d-none"} noValidate>      
        <label htmlFor="concern">Concepto</label>
        <Field name="concern" type="text" />
        <ErrorMessage component="span" className="error-message" name="concern" />  

        <label htmlFor="amount">Monto</label>
        <Field name="amount" type="number" />
        <ErrorMessage component="span" className="error-message" name="amount" />

        <div>
          <label htmlFor="type">
          <Field type="radio" name="type" value="income" />
            Ingreso        
          </label>
          <label htmlFor="type">
          <Field type="radio" name="type" value="outcome" />
            Egreso        
          </label>
        </div>
        <ErrorMessage component="span" className="error-message" name="type" /> 

        <label htmlFor="date">Fecha</label>
        <Field name="date" type="date" />
        <ErrorMessage component="span" className="error-message" name="date" /> 

        <button type="submit">Guardar</button>                
      </Form>
    </Formik>
  )
}

export default FormBudget;