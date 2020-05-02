import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';   
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';


const news = ({match})=> {
    return(<h1>News Page : {match.params.id}</h1>)
}

class App extends Component {
  
  render(){ 
     return (
       <Router>
            <div>
                <Link to="/">Home Page</Link> <br></br>
                <NavLink activeStyle = {{color:'red'}} exact to="/Contact">Contact Page</NavLink> <br></br>
                <NavLink activeClassName = "activeClassName" exact to="/News/2">News Page</NavLink> <br></br>

                <Route path="/" exact render={
                                         () =>{ return (<h1>Home Page</h1>)}
                                        }/>
                <Route path='/Contact' exact strict render= {
                                                  ()=> { return (<h1>Contact Page</h1>)}
                                                }/>
                <Route path ='/News/:id' component = {news}/>
                
            </div>
       </Router>
    );
   }
}

export default App;
