import {combineReducers} from 'redux';
import actionType from './auth/authTypes';
import Home from './home/homeReducer';
import Auth from './auth/authReducer';
import CheckInOut from './checkIn/checkinReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appReducer = combineReducers({
  Home,
  Auth,
  CheckInOut,
});

const rootReducer = (state, action) => {
  if (action.type === actionType.LOGOUT) {
    // for all keys defined in your persistConfig(s)
    AsyncStorage.removeItem('persist:root');
    // storage.removeItem('persist:otherKey')

    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
