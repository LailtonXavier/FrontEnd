exe https://reactrouter.com/web/guides/quick-start

roteamento seria para onde nossa aplicação vai, qnd for clicado em alguma coisa
    - isso substitui as tag ' a ' do html, fazendo o seu proprio caminho
      { usando o Link para substitui os " a " inserindo o BrowserRouter no App.js }
       ate agora o BrowserRouter sempre pagando o total


primeiro precisa instalar
  npm i react-router-dom

no src
  - routers > vai ficar nossa paginas para o roteamento

    importnaod geral
      BrowserRouter : vc precisa envolver todo mundo em BrowserRouter...
          - ele prover as configurações dos link na pagina
          - ele envolver toda app, no arquivo App.js ...
      Switch : ele vai permitir que somente uma rota é chamada por vez
      Route path="/" component={Login}
        - aqui seria o caminho por exe da raiz que seria o componente Login
        - exact > seria para elas a inica fizada na tela, ou seja. se por aguma coisa
            depois do / ele ja sai da tela de Login
            /**
            se liga na logica
              o que n estiver fora da url depois da barra '/' cai num erro,
                tal erro que vc pode estilizar.
            **/
         - Link to="/">  se liga nisso
