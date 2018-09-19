import * as types from './authTypes';

export function setAuthenticatedUser(data) {
  return {
    type: types.AUTH_USER,
    data
  };
}

export function authError(errorData) {
  return {
    type: types.AUTH_ERROR,
    errorData
  };
}

export function authSuccess(successData) {
  return {
    type: types.AUTH_SUCCESS,
    successData
  };
}

export function logout() {
  return {
    type: types.LOGOUT
  };
}