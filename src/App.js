import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import {ThemeProvider} from '@material-ui/core/styles';
import {Router} from 'react-router-dom';
import Routes from './Routes';
import theme from './theme';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient, InMemoryCache} from 'apollo-boost';
import {createHttpLink} from 'apollo-link-http';

import 'bootstrap/dist/css/bootstrap.min.css';

const browserHistory = createBrowserHistory();

const link = createHttpLink(
  {
    uri: process.env.REACT_APP_API_URI,
  }
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


export default class App extends Component {
  render(){
    return(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Router history={browserHistory}>
            <Routes/>
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}
