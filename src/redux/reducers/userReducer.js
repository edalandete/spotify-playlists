import actionTypes from '../actions/actionTypes';

function userReducer(user = null, { type, newUser }) {
  let currentUser = user;
  switch (type) {
    case (actionTypes.GET_USER):
      currentUser = newUser;
      break;
    default:
      break;
  }
  return currentUser;
}

export default userReducer;
