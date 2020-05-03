import {UPDATE_USER,GET_USER_ERROR} from '../Actions/users-actions'

export  function userReducer(state = "",action){
    console.log("userReducer call");
    switch(action.type){
      case UPDATE_USER:
           return action.payload.user
    case GET_USER_ERROR:
        return action.payload.error
      default:
        return state;
    } 
 }

 