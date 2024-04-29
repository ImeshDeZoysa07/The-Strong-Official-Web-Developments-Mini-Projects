import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        {/* Other public routes */}
        {/* <Route path="/public" component={PublicComponent} /> */}
      </Switch>
    </Router>
  );
};

export default App;
