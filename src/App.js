import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';    
import {connect} from 'react-redux';


class App extends Component {
   
  render(){
     console.log(this.props);  
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

// Tüm state leri almak için
// const mapStateToProps = state => {
//      return state;
// }

//export default connect(mapStateToProps)(App);

// Belli state leri almak için.
const mapStateToPropsSpecial = state => ({
  products:state.products
})

export default connect(mapStateToPropsSpecial)(App);
