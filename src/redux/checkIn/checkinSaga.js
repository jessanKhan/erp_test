import {call, put} from 'redux-saga/effects';
import actionType from './checkInTypes';
import {CheckInService} from '../../services/checkinServices';
export const checkInRequest = function* (action) {
  try {
    let email = action.email;
    let password = action.password;

    const payload = {
      email,
      password,
    };
    console.log(payload);

    const result = yield CheckInService.checkIn(payload).then(
      (res) => {
        console.log('Response Data', res);
        // return res.data.success === true ? res.data.success : false;
        if (res.data.success === true) {
          return res.data;
        } else {
          return false;
        }
      },
      //   AuthService.getuser(payload).then((res) => console.log(res)),
      (error) => {
        console.log(error);
      },
    );
    console.log('result', result);

    result.success === true
      ? yield put({
          type: actionType.CHECK_IN,
          data: result.token,
        })
      : console.log('Login Error password not match');
  } catch (err) {
    console.log('Error ', err);
  }
};

// generator Func
export const _CheckIN = function* (action) {
  try {
    const api_result = yield call(checkInRequest, action);
  } catch (err) {
    console.log('ERROR Is', err);
  }
};

export const checkOutRequest = function* (action) {
  try {
    let email = action.email;
    let password = action.password;

    const payload = {
      email,
      password,
    };
    console.log(payload);

    const result = yield CheckInService.checkIn(payload).then(
      (res) => {
        console.log('Response Data', res);
        // return res.data.success === true ? res.data.success : false;
        if (res.data.success === true) {
          return res.data;
        } else {
          return false;
        }
      },
      //   AuthService.getuser(payload).then((res) => console.log(res)),
      (error) => {
        console.log(error);
      },
    );
    console.log('result', result);

    result.success === true
      ? yield put({
          type: actionType.CHECK_OUT,
          data: result.token,
        })
      : console.log('Login Error password not match');
  } catch (err) {
    console.log('Error ', err);
  }
};

// generator Func
export const _CheckOut = function* (action) {
  try {
    const api_result = yield call(checkOutRequest, action);
  } catch (err) {
    console.log('ERROR Is', err);
  }
};

export const checkLogRequest = function* (action) {
  try {
    let email = action.email;
    let password = action.password;

    const payload = {
      email,
      password,
    };
    console.log(payload);

    const result = yield CheckInService.checkIn(payload).then(
      (res) => {
        console.log('Response Data', res);
        // return res.data.success === true ? res.data.success : false;
        if (res.data.success === true) {
          return res.data;
        } else {
          return false;
        }
      },
      //   AuthService.getuser(payload).then((res) => console.log(res)),
      (error) => {
        console.log(error);
      },
    );
    console.log('result', result);

    result.success === true
      ? yield put({
          type: actionType.CHECK_LIST,
          data: result.token,
        })
      : console.log('Login Error password not match');
  } catch (err) {
    console.log('Error ', err);
  }
};

// generator Func
export const _CheckLog = function* (action) {
  try {
    const api_result = yield call(checkOutRequest, action);
  } catch (err) {
    console.log('ERROR Is', err);
  }
};
