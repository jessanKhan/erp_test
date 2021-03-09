import actionType from './homeType';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.PLUS:
      return {
        ...state,
        value: state.value + 1,
      };
    case actionType.MINUS:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
