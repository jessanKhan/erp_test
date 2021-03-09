import actionTypeAuth from './authTypes';

export function signIn(email, password) {
  return {
    type: actionTypeAuth.SIGNIN,
    email: email,
    password: password,
  };
}

export function GetUserINFO(emailaddress, token) {
  return {
    type: actionTypeAuth.SIGNIN_FAILED,
    emailaddress: emailaddress,
    token: token,
  };
}

export function logout() {
  return {
    type: actionTypeAuth.LOGOUT,
  };
}

//template of an action
//
// export function nameofFunction(data) {
//     return {
//       type: actionType,
//       data: data
//     };
//   }
//
