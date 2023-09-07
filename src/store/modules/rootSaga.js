import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga() {
  console.log('b sag');
  return yield all([auth]);
}
