import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';    
import {connect} from 'react-redux';
import {userUpdate} from './Actions/users-actions'

class App extends Component {
   
  onUpdateUser =()=>{
    console.log("onChangeUser");
   // this.props.users = "Ahmet"  Burda yapaman neden dersen aciton üzerinde gitmen gerek.
   //this.props.dispatch(userUpdate("Ahmet"));
   this.props.onUpdateUser("Ahmet");
  }

  render(){
     console.log(this.props);  
     return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Redux Dersine HoşGeldiniz</h2>
        <h2>{this.props.users}</h2>
        <button type="button"   onClick = {this.onUpdateUser} >Change User</button>
      </header>
    </div>
    );
   }
}

const mapStateToProps = (state,props)=> {
     //return state;
     return{
       ...state,
       MyCount: props.Count + 4
     }
}

const mapDispatchToProps = {
  onUpdateUser : userUpdate
}

const mergeProps = (propsFromState,propsFromDispatch,ownProps)=>{
   console.log(propsFromState);
   console.log(propsFromDispatch);
   console.log(ownProps);
   return {};
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(App);