import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { BASE_ROUTE } from './base.route';

const NavigationProvider = () => (
  <Router>
    <Switch>
      {BASE_ROUTE.map((route) => (
        <Route key={route.id} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default NavigationProvider;
