import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';   
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch} from 'react-router-dom';
import Error from './Error'

const news = ({match})=> {
    return(<h1>News Page : {match.params.id}</h1>)
}

const Profile = ()=>{
  return(
    <h1> Profile : Mehmet Teker</h1>
  )
}

class App extends Component {
   
  state = {
    isLoading:false
  }

  onLogin = () => {
     this.setState({
       isLoading : !this.state.isLoading? true:false
     })

     console.log(this.state.isLoading);
  }

  render(){ 
    console.log(this.state.isLoading);
     return (
       <Router>
            <div>
                <Link to="/">Home Page</Link> <br></br>
                <NavLink activeStyle = {{color:'red'}} exact to="/Contact">Contact Page</NavLink> <br></br>
                <NavLink activeClassName = "activeClassName" exact to="/News/2">News Page</NavLink> <br></br>
                <NavLink activeClassName = "activeClassName" exact to="/Profile" >
                  Profile Page
                </NavLink> <br></br><br></br>
                 <button type="button" value = { this.state.isLoading ? 'Logout' : 'Login'}
                         onClick= {this.onLogin}> </button>

                <Switch>
                     <Route path="/" exact render={
                                              () =>{ return (<h1>Home Page</h1>)}
                                             }/>
                     <Route path='/Contact' exact strict render= {
                                                       ()=> { return (<h1>Contact Page</h1>)}
                                                     }/>
                     <Route path ='/News/:id' component = {news}/>
                     <Route path ='/Profile'  exact strict render = {
                        () => { return( 
                          this.state.isLoading ? <Profile></Profile> : <Redirect to = "/"></Redirect>
                        )}
                     }/>
                     <Route exact component = {Error}></Route>
                </Switch>
                      
                
            </div>
       </Router>
    );
   }
}

export default App;
