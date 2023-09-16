import * as types from '../types';

import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  token: '',
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      return newState;
    }

    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isAdmin = action.payload.admin;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization; // deleta o token de autenticação do usuário no header das reqs em caso de login_failure
      const newState = { ...initialState };
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      return newState;
    }

    case types.REGISTER_SUCCESS: {
      const newState = { ...state };
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    default: {
      return state;
    }
  }
}
