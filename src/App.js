import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class App extends Component {
   
  state = {
    name:"Mehmet"
  };


  constructor(props){
    super(props);
    console.log("Constructor");
  }
   
  componentWillMount(){
    console.log("componentWillMount");
  }
  
  componentDidMount(){
    console.log("componentDidMount");
  }
  
  changeName =()=>{
    this.setState({
      name:"Ahmet"
    });
  }

   render(){
     console.log("Render");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Child name = {this.state.name}></Child>
          <button onClick = {this.changeName} >Change Name</button>
        </header>
      </div>
    );
   }
  
}

export default App;
