import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Error from './components/Error/Error'
import { Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="container-view">
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/home' component={Dashboard} />
          <Route component={Error} />
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
