import {UPDATE_USER} from '../Actions/users-actions'

export  function userReducer(state = "",action){
    console.log("userReducer call");
    switch(action.type){
      case UPDATE_USER:
           return action.payload.user
      default:
        return state;
    } 
 }

 