import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Router, Route, hashHistory } from 'react-router';

import Main from './Main';
import Results from './Results';
import Expenses from './Expenses';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }/>
    <Route path="/expenses" component={ Expenses }/>
    <Route path="/results" component={ Results }/>
  </Router>,
  document.getElementById('app')
);