import actionType from './authTypes';
import jwt_decode from 'jwt-decode';
const initialState = {
  value: 0,
  message: '',
  loading: true,
  authenticated: false,
  info: null,
  token: '',
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGNIN_SUCCESS:
      return {
        ...state,
        info: action.info,
        loading: false,
        authenticated: true,
        data: action.data,
        token: action.token,
      };
    case actionType.SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    case actionType.LOGGED_IN:
      return {
        ...state,
        loading: false,
        message: action.message,
        data: action.data,
      };
    default:
      return state;
  }
};
