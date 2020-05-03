import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as user from './Reducers/userReducer'; 
import productReducer from './Reducers/productReducer';


// combineReducers ayarlamak.
const rootReducer = combineReducers({
  products: productReducer,
  users: user.userReducer
});

// initial State vermek.
const store = createStore(rootReducer, {
  products: [{
    type:"TV",
    name:"Vestel"
  }],
  users:"Mehmet"
 },
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const updateUserAction = {
//   type:"userUpdate",
//   payload: {
//     user: "Ahmet"
//   }
// }
 
// store.dispatch(updateUserAction);
//console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
