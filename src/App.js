import React, { useState } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import Login from './containers/Login/Login';
import Error from './containers/Error/Error'
import AuthContext from './context/AuthContext';
import { Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const history = useHistory();

  const login = (token, user, tokenExpiration) => {
    setToken(token);
    setUser(user);
    history.push('/home');
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{token: token, user: user, login: login, logout: logout}}>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/home' component={Dashboard} />
          <Route component={Error} />
        </Switch>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
