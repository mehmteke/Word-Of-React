import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class App extends Component {
   
  state = {
    name:"Mehmet",
    amount:100,
    price :10
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
  

  shouldComponentUpdate(nextProps,nextState){
    console.log("NextState" + nextState.amount);
    
    if(nextState.amount % this.state.price === 0)
        return true;
    
    return false;
  }


  componentWillUpdate(nextProps,nextState){
    console.log("componentWillUpdate çalıştı Props : " + nextProps.amount + " State : " + nextState.amount);
  }
  
  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate çalıştı Props : " + prevProps.amount + " State : " + prevState.amount);
  }

  changeName =()=>{
    this.setState({
      name:"Ahmet"
    });
  }

  changeAmount(e){ 
    this.setState({
      amount: e.target.value,
    });
  }

  render(){
     console.log("Render Çalıştı");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Child name = {this.state.name}></Child>
          <button onClick = {this.changeName} >Change Name</button>
          <input onChange={this.changeAmount.bind(this)}></input>
          <p>
            Bir Elmanın Fiyatı : {this.state.price}
          </p>
          <p>
               {this.state.amount / this.state.price}  Adet alabilirsiniz
          </p>
        </header>
      </div>
    );
   }
  
}

export default App;
