import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';   
import {BrowserRouter as Router, Route} from 'react-router-dom';


const news = ()=> {
  return(<h1>News Page</h1>)
}

class App extends Component {
  
  render(){ 
     return (
       <Router>
            <div>
                <Route path="/" exact render={
                                         () =>{ return (<h1>Home Page</h1>)}
                                        }/>
                <Route path='/Contact' exact strict render= {
                                                  ()=> { return (<h1>Contact Page</h1>)}
                                                }/>
                <Route path ='/News' component = {news}/>
                
            </div>
       </Router>
    );
   }
}

export default App;
