import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = props => {
  const greeting = (props.emphasize) ? <em>{props.greeting}</em> : props.greeting;

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{greeting}</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;
