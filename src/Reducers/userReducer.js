export  function userReducer(state = "",action){
    switch(action.type){
      case "userUpdate":
           return action.payload
      default:
        return state;
    } 
 }

 export function userReducer2(state = [],action){
    console.log("Test");
    return state;
  }
 