import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import App from '../components/App';
import AbmPage from '../components/AbmPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <div className="main-container">
        <Switch>
          <Route component={App} path="/" exact={true} />
          <Route component={AbmPage} path="/abm" />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  )  
}

export default AppRouter;