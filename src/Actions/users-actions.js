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