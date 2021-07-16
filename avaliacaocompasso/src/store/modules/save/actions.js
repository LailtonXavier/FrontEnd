import * as types from '../types';

export function searchByName(payload) {
  return {
    type: types.SEARCH_BY_NAME,
    payload,
  };
}

export function searchFailure(payload) {
  return {
    type: types.SEARCH_FAILURE,
    payload,
  };
}

export function searchByNameSuccess(payload) {
  return {
    type: types.SEARCH_BY_NAME_SUCCESS,
    payload,
  };
}
