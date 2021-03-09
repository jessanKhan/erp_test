import {call, put} from 'redux-saga/effects';
import actionType from './authTypes';
import {AuthService} from '../../services/authServices';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export const _requestToApi = function* (action) {
  try {
    let email = action.email;
    let password = action.password;

    const payload = {
      email,
      password,
    };
    console.log(payload);

    const result = yield AuthService.login(payload).then(
      (res) => {
        console.log('Response Data', res);

        if (res.data.success === true) {
          return res.data;
        } else {
          return false;
        }
      },
      (error) => {
        console.log(error);
      },
    );
    if (result.success == true) {
      const getData = yield axios
        .get(
          `https://erp.ibos.io/domain/CreateUser/GetUserInformationByUserEmail?Email=${payload.email}`,

          {
            headers: {
              Authorization: `Bearer ${result.token}`,
            },
          },
        )
        .then((res) => {
          console.log('sssssssssssssssss', res.data);
          return res.data;
        });
      yield put({
        type: actionType.SIGNIN_SUCCESS,
        info: jwtDecode(result.token),
        token: result.token,
        data: getData,
      });
    } else {
      console.log('Login Error password not match');
    }

    // const tokendata = jwtDecode(result.token);

    // console.log('result', result);

    // result.success === true
    //   ? yield put({
    //       type: actionType.SIGNIN_SUCCESS,
    //       info: jwtDecode(result.token),
    //     })
    //   : console.log('Login Error password not match');
  } catch (err) {
    console.log('Error ', err);
  }
};

// generator Func
export const _AuthSignIn = function* (action) {
  try {
    const api_result = yield call(_requestToApi, action);
  } catch (err) {
    console.log('ERROR Is', err);
  }
};

export const _getInfoRequest = function* (action) {
  try {
    let emailaddress = action.emailaddress;

    const payload = {
      emailaddress,
    };
    console.log(payload);

    const result = yield AuthService.getuser(payload).then(
      (res) => {
        console.log('Response Data', res);
        return res.data.success === true ? res.data.success : false;
      },
      //   AuthService.getuser(payload).then((res) => console.log(res)),
      (error) => {
        console.log(error);
      },
    );
    console.log('result', result);

    result.success === true
      ? yield put({
          type: actionType.SIGNIN_SUCCESS,
          data: result.token,
        })
      : console.log('Login Error password not match');
  } catch (err) {
    console.log('Error ', err);
  }
};

// generator Func
export const _AfterSignIn = function* (action) {
  try {
    const api_result = yield call(_getInfoRequest, action);
  } catch (err) {
    console.log('ERROR Is', err);
  }
};
