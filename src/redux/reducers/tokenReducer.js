import actionTypes from '../actions/actionTypes';

function tokenReducer(token = false, { type, newToken }) {
  let currentToken = token;
  switch (type) {
    case (actionTypes.GET_TOKEN):
      currentToken = newToken;
      break;
    default:
      break;
  }

  return currentToken;
}

export default tokenReducer;
