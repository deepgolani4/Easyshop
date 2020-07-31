import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import HomePage from './components/Website/app'
var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <HomePage />
    </Router>
  );
}

export default App;
