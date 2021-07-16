import { takeLatest, all, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import axios from '../../../services/axios';
import * as types from '../types';

function* searchByName({ payload }) {
  const { name } = payload;
  try {
    yield call(axios.get, '/users', {
      name,
    });
    yield put(actions.searchByNameSuccess({ name }));
  } catch (e) {
    console.log(e);
  }
}

export default all([takeLatest(types.SEARCH_BY_NAME, searchByName)]);
