import * as types from '../types';

export function loginRequest(payload) {
  console.log('b act');
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  console.log('c act');
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  console.log('e act');
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}
