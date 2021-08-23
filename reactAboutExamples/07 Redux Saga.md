
# Redux Saga vai um midle, vai funcionar no meio da ação, (tbm tem o Redux func)

> ação => reducer => newState - seria a forma normal, porem nas requisições ao back tem md
> ação (request) => SAGA => reducer => success/fail
  - ele vai pedir uma requisição ao SAGA, ele vai rerificar e depois chamar o reducer. e por fim vai retorna um sucesso ou falha.
    - qnd fizer uma requisição o SAGA vai dizer se foi secesso ou falha

##  a logica é add uma Promisse de 3 seg qnd clicado no botao
- o login disparou o [request] e la no sagas vai fazer os tratamentos
  - dentro do try catch, se der certo dispara o metodo Success ou o do Farule

### RESUMO
  - [types] ações
  - [reducer] vms colocar os tipos dessas ações
  - [actions] corrigindo os novos metodos
  - [login] atualizar o metodo, pq agora quem ser chamado é o botaoRequest();
  - [exmple>sagas.js]
      - import ... from 'redux-saga/effects (n pode esquecer desse 'effects')
      - import call              >  chama uma função assincrona (tipo no back)
      - import put               > ele dispara a actions
      - import all                > ele vai me permitir escutar mais de uma ação
      - import takeLatest   > o user pode clicar varias vezes, mas eu so pego a ultoma vez, so um clique
  - [modules>rootSaga.js] ele vai pegar o [sagas] que esta toda nossa configuração
      - vms utilizar o Middlware
          - [example>index.js] import applyMiddleware


# intalar o saga para import o nenimo
  npm i redux-saga
