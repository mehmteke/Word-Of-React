import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';    
import {connect} from 'react-redux';
import {userUpdate} from './Actions/users-actions'

class App extends Component {
   
  onChangeUsers =()=>{
    console.log("onChangeUser");
   // this.props.users = "Ahmet"  Burda yapaman neden dersen aciton üzerinde gitmen gerek.
   this.props.dispatch(userUpdate("Ahmet"));
  }

  render(){
     console.log(this.props);  
     return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Redux Dersine HoşGeldiniz</h2>
        <h2>{this.props.users}</h2>
        <button type="button"   onClick = {this.onChangeUsers} >Change User</button>
      </header>
    </div>
    );
   }
}

const mapStateToProps = state => {
     return state;
}
export default connect(mapStateToProps)(App);