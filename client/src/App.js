import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './components/Website/app';
var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <HomePage />
    </Router>
  );
}

export default App;
