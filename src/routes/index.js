import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';



const Routes = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Home} />
      <Route path='/checkout' component={Checkout} />
      
    </Switch>
  )
}

export default Routes;
