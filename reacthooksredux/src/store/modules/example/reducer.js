import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// o reducer vai escutar e disparar as ações
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Deu certo');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      // newState.botaoClicado = newState.botaoClicado ? false : true;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro =_');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    // sempre devemos retornar ou o nove estado ou o atual
    default: {
      return state;
    }
  }
  // console.log(action);
}
