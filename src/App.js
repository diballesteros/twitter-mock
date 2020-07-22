import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Error from './components/Error/Error'
import Context from './context/context';
import { Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Context.Provider>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/home' component={Dashboard} />
          <Route component={Error} />
        </Switch>
      </Context.Provider>
    </ApolloProvider>
  );
}

export default App;
