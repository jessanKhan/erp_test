import actionTypeCheckin from './checkInTypes';

export function checkIn(email, password) {
  return {
    type: actionTypeCheckin.CHECK_IN,
    email: email,
    password: password,
  };
}

export function checkOut(email, password) {
  return {
    type: actionTypeCheckin.CHECK_OUT,
    email: email,
    password: password,
  };
}
export function checkLogs(email, password) {
  return {
    type: actionTypeCheckin.CHECK_LIST,
    email: email,
    password: password,
  };
}
