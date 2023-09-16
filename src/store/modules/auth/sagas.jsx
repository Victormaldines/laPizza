import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as types from '../types';
import * as actions from './action';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Seja bem-vindo(a)!');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    yield put(actions.loginFailure());
    toast.error('Usuário ou senha inválidos');
  }
}

function persistRehydrate({ payload }) {
  try {
    const token = get(payload, 'auth.token', '');
    if (!token) return;

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Algo deu errado, tente logar-se novamente');
  }
}

function* registerRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/customers', payload);
    yield put(actions.registerSuccess({ ...response.data }));
    toast.success('Registro efetuado com sucesso :)');
    history.push('/login');
  } catch (e) {
    toast.error('O usuário escolhido já está em uso :(');
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
