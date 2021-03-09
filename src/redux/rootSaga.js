import {takeEvery, select, call, put} from 'redux-saga/effects';

// Import your actiontypes............
import actionTypeAuth from './auth/authTypes';
import actionTypeCheckin from './checkIn/checkInTypes';

// Import sagas you wanted.............
import {_AuthSignIn, _getInfoRequest} from './auth/authSaga';
import {_CheckIN, _CheckOut, _CheckLog} from './checkIn/checkinSaga';

const rootSaga = function* () {
  yield takeEvery(actionTypeAuth.SIGNIN, _AuthSignIn);
  yield takeEvery(actionTypeAuth.LOGGED_IN, _getInfoRequest);
  yield takeEvery(actionTypeCheckin.CHECK_IN, _CheckIN);
  yield takeEvery(actionTypeCheckin.CHECK_OUT, _CheckOut);
  yield takeEvery(actionTypeCheckin.CHECK_LIST, _CheckLog);
};

export default rootSaga;
