import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// ele vai receber os rebecers para salvar os meninos
// key > seria nome da aplicação
// whitelist > ele vai receber que a gente quer q salve que esta salvo em nosso [ rootReducer.js ]
export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'],
    },
    reducers
  );

  return persistedReducers;
};
