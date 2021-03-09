import actionType from './checkInTypes';

const initialState = {
  value: 0,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHECK_IN:
      return {
        ...state,
        value: 1,
        // data: action.data,
      };
    case actionType.CHECK_OUT:
      return {
        ...state,
        // value: state.value - 1,
        value: 2,
      };
    default:
      return state;
  }
};
