import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';

function App() {
  return (
    <Router>
      <h1>test</h1>
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
