import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Sales from './components/Sales';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/sales" component={Sales} />
      <Route path="/reports" component={Reports} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
