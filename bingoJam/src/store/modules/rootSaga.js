import { all } from 'redux-saga/effects';

import save from './save/sagas';

export default function* rootSaga() {
  return yield all([save]);
}
