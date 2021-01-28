import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage.component';

const HatsPage = () => {
  <div>
    <h1>Hats Page!</h1>
  </div>
}

function App() {
  return (
    <div >
      <Switch>
        
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      
      </Switch>
    </div>
  );
}

export default App;

// Switch makes it so that the moment that the path is true, it will render that component (route) and stop there, thus not rendering anything afterwards.  This allows us to set more control into our routes.