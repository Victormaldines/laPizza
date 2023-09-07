import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as types from '../types';
import * as actions from './action';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    console.log('d sag');
    console.log(response.data);
    yield put(actions.loginSuccess({ ...response.data }));
    console.log('f sag');
    toast.success('Login efetuado com sucesso!');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    console.log('x sag');
    yield put(actions.loginFailure());
    console.log('Usuário ou senha inválidos');
    toast.error('Usuário ou senha inválidos');
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
