import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';    
import {connect} from 'react-redux';


class App extends Component {
   
  render(){  
     return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Redux Dersine HoşGeldiniz</h1>
      </header>
    </div>
    );
   }
}

export default connect()(App);
