import axios from 'axios';

export const UPDATE_USER = "UPDATE_USER";

export function userUpdate(newUser) {
    console.log("userUpdate Action Call")
    return {
      type:UPDATE_USER,
      payload:{
          user:newUser
        }
    };
}

export function getUsers(){
    return dispatch => {
        let url = "http://localhost:53987/api/user";
        axios.get(url)
             .then(response => console.log(response))
             .catch(error => console.log(error))
    }
}