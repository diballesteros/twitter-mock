import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Error from './components/error/Error'
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container-view">
      <Switch>
        <Route path='/' component={Login} exact/>
        <Route path='/home' component={Dashboard} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
