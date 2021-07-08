import { combineReducers } from 'redux';
// ele vai combinar varios reducers

import exampleReduxer from './example/reducer';

export default combineReducers({
  example: exampleReduxer,
});
