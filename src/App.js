import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

class App extends Component {
  
    state = {
      users:[],
      isLoading:true
    } 

   componentDidMount() {
    let url = "http://localhost:53987/api/user";
       
    setTimeout( () => {
      fetch(url)
      .then(data => data.json())
      .then(users=> {
        this.setState({
          users: Object.entries(users),
          isLoading:false
        })
      },9000) 
   })
  }
     

  render(){
     const isLoading = this.state.isLoading; 
     console.log(isLoading);
     if(this.state.users.length === 0)  return(<div className="loader">Test</div>)
     return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Users </h1>
          {
            isLoading ? 'Loading...'
                      : ''
          }
          {
            !isLoading ? this.state.users.map((user,index) => <li key = {index}> {user[1]}</li>)
                       : null
          }
        </header>
      </div>
    );
   }
  
}

export default App;
