import * as types from '../types';

const initialState = {
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_BY_NAME: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.SEARCH_BY_NAME_SUCCESS: {
      const newState = { ...state };
      newState.user.name = action.payload.name;
      newState.isLoading = false;
      return newState;
    }

    case types.SEARCH_FAILURE: {
      const newState = { ...state };
      return newState;
    }

    default: {
      return state;
    }
  }
}
