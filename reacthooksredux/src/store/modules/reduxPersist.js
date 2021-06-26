import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-HOOKS-REDUX',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducers;
};
