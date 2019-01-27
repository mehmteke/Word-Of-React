import React, { Component } from 'react'; 
import './App.css'; 
import {Link, Route} from 'react-router-dom';
import  'semantic-ui-css/semantic.min.css';
import MoviesPage from './components/pages/MoviesPage';
import {
  Container,  
} from 'semantic-ui-react';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Container text>
         <div>
             <Route path='/movies' component = {MoviesPage}></Route>
         </div>
        </Container> 
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
