import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Presupuesto App</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/abm" exact={true}>
          Registros
        </NavLink>
      </nav>      
    </header>
  )
}

export default Header;