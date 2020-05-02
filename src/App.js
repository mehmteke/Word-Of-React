import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';   
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  
  render(){ 
     return (
       <Router>
            <div>
                <Route path="/" exact render={
                                         () =>{ return (<h1>Home Page</h1>)}
                                        }/>
                <Route path='/Contact' render= {
                                                  ()=> { return (<h1>Contact Page</h1>)}
                                                }/>
                
            </div>
       </Router>
    );
   }
}

export default App;
