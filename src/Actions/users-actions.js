import axios from 'axios';

export const UPDATE_USER = "UPDATE_USER";
export const GET_USER_ERROR = "GET_USER_ERROR";

export function userUpdate(newUser) {
    console.log("userUpdate Action Call")
    return {
      type:UPDATE_USER,
      payload:{
          user:newUser
        }
    };
}

export function showError() {
    return {
        type:GET_USER_ERROR,
        payload: {
            error: "ERROR !!!"
        }
    }
}

export function getUsers(){
    return dispatch => {
        let url = "http://localhost:53987/api/user65";
        axios.get(url)
             .then(response => response.data)
             .then(response => dispatch(userUpdate(response.name)))
             .catch(error =>  dispatch(showError()))
    }
}