import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div >
      <Switch>
        
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      
      </Switch>
    </div>
  );
}

export default App;

// Switch makes it so that the moment that the path is true, it will render that component (route) and stop there, thus not rendering anything afterwards.  This allows us to set more control into our routes.