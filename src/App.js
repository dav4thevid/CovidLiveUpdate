import React from 'react';
import Navbar from '../src/Components/Navbar';
import Homepage from './Components/Homepage'
import About from '../src/Components/About'
import Errors from '../src/Components/Error'
import SafetyMeasures from '../src/Components/SafetyMeasures';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
        <Navbar></Navbar>
      <Switch>
        {/* <Homepage></Homepage> */}
        <Route exact path = "/" component = {Homepage}/>
        <Route path="/about" component={About} />
        <Route path="/safety" component={SafetyMeasures} />
        <Route component={Errors} />
      </Switch>
    </div>
  );
}


