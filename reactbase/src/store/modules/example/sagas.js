import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

// fazendo so um exemplo de uma promisse que demora, isso normalmente é no do back
const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

// ele utiliza funções geradoras
// dentro dessa função seria recebidos o payload email, senha
function* exampleRequest() {
  try {
    // isso seria os async awt, dentro do call, poderia esta email, senha, nome, etc.
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error('deu err0');
    yield put(actions.clicaBotaoFailure());
  }
}

// ele recebe um array com varias requisições
export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
