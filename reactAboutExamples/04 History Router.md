
a logica é:
  n deixar o cara entrar no site se n fizer o login, qnd feito sera
    redirencionado a pagina

    terminar: npm i history,
          import ele no App.js junto com Router
          history.push('/'); nas pag de error, ele redirenciona sempre para a Home
          npm i history@@4.10.1 atualizar para essa versão

    para isso da logica funciona sera feito algumas alterações em Routes na rota
    - criar a nossa propria rota
    - criar um componente e tentar usar a rota atual (Route) - se ele estiver logado
        -  se não estiver logado: duas coisas para redirenciona
              - history ou redirect
              - vai usar redirect pq vai ter acesso
              - em outros casos se n tiver acesso usa o history

  routes > MyRoute.js  : nossa rota personalizada
      - apos tudo ja feito, precisamo instalar PropTypes
        - npm i prop-types

    depois de finalizado, ele vai substituir o Route, do Routes
      - import MyRoute, aqui criamos
      - quer fechar a rota é so colocar em Routes
          - isClosed, tudo esta relacionado ao roata personalizada
            - em isLoggedIn vc pode mudar pra ver o que acontece 
