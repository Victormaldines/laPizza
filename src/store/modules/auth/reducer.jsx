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
      console.log('c red');
      const newState = { ...state };
      return newState;
    }

    case types.LOGIN_SUCCESS: {
      console.log('h act');
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isAdmin = action.payload.admin;
      console.log(newState, 'e red');
      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization; // deleta o token de autenticação do usuário no header das reqs em caso de login_failure
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return initialState;
    }
  }
}
