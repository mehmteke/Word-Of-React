import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

function reducer(state,action){
  if(action.type === "newState")
    return action.payload.newState
  return "state";
}

const store = createStore(reducer);

const action = {
  type:"newState",
  payload:{
    newState : "My Name is Mehmet"
  }
};

const action2 = {
  type:"newState",
  payload:{
    newState : "My Name is Mehmet 2"
  }
};

store.subscribe(
  ()=>{
    console.log("Store Update Edildi.");
    console.log(store.getState());
  }
); 

store.dispatch(action);
store.dispatch(action2);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
