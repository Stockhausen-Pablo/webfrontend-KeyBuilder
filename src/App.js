import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';

import './App.css';

const browserHistory = createBrowserHistory();


export default class App extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Routes/>
      </Router>
    )
  }
}
