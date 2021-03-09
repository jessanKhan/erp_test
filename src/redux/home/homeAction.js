import actionType from './homeType';

export function increment() {
  return {
    type: actionType.PLUS,
  };
}

export function decrement() {
  return {
    type: actionType.MINUS,
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
