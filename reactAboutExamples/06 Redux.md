## redux
=>  estado inicial: {
  user_logged: false;
}

## => ação => reducer => newState = state => newState
- ações são o que que o 'reducer' tem que fazer
-  vai disparar uma 'ação', ela vai ser ouvida pelo 'reducer'  e ele vai ser responsavel por alterar o estado, como:
  - criando um novo 'newState' recebendo o 'state' estado atual.
    - ele vai manipular o novo estado 'newState' e vai retorna-lo

## > src => store : tudo de [Redux] vai ficar aqui
  - npm i redux react-redux
    - ele vai ouvir todas as ações que forem acontecidas

> dispara ação redux dispatch
  - no header.js usando outro hooks = useSelector recebe uma fução
    - dentro da func = state

## teremos um modules para cada coisa
  - [store>modules>exmple>actioons.js--reducer.js]
      - [actions.js] vai disparar as ações,
          - importando essa [actions.js] e disparando a ação

    # criamo um arquivo [types.js] onde eles estão pegando todos os tipos,
      - assim fica mais facil encontrar todos as ações que

## RESUMO DAS PASTAS E ARQUIVOS CRIADOS
  - [modules>example=>actions.js/reducer.js]
      - [actions.js] > import types (seria todos os tipos) [modules>types.js]

      - [reducer.js] > export to rootReducer (rootReducer esta pegando todos os reducers e guardando em um so local) [modules>rootReducer.js]

      - No [login.js] ele import [actions.js] no disparo dispacth
      - No [Header.js] acrescentou a chave 'example' do obj que esta em [rootReducer.js]
