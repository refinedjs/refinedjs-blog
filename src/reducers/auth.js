import * as types from '../actions/authTypes';

const initialState = {
  userInfo: {},
  isAuthing: false,
  isError: false
};

const auth = (state = initialState, action) => {
  switch(action.type) { //eslint-disable-line
    case types.AUTH_USER:
      return {
        ...state,
        userInfo: action.data.userInfo
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        isAuthing: false,
        isError: true
      };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        isAuthing: false,
        isError: false
      };
    case types.LOGOUT:
      return {
        ...state,
        userInfo: {}
      };
    default:
      return state;
  }
};

export default auth;