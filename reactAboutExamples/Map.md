### map mental

  * - criar app (create-react-app)
  * - config (eslint-prettier)
  * - limpar arquivos
  * - style (styped-components)
  * - pastas com styles [...]
    * [src>--]
              [components(Header)-->]
                  [config(colors)-->]
                      [pages(Login,Aluno...)-->]
                          [styles(GlobalStyles)]

# React Router DOM: responsavel pelo o roteamento da aplicação [routes]
  - npm i react-reouter-dom
  * - [routes(index.js)] aqui fica todos as nossas paginas e suas rotas

# History para os roteamentos tbm [services]
  - npm i history@4.10.1 ou 5.0.0
  * - [services(history)-->sevices(axios)]
  - *  ele servi para guardar as rotas ou redirencionar

# Rotas personalizadas MyRouter [routes-MyRoutes.js]
 - é preciso pq no Api temos token, ou seja, para fazer alguma aplicações devemos fazer login primeiro.
 - se estiver logado = history ou redirect, podemos usar os dois
 * - [rotas(MyRoutes)]
    - ele recebe os components de [routes.js] por isso os (props),,
    - ele usa o (Redirect) para salvar o estado anterior e mandar o usuario apos ter feito login.

# React toastfy
  - npm i react-toastify
  - esta relacionado a msg de erro ou sucesso
  * - [App.js] import ( ToastConcainer 'react-toastify') = autoClose={milisegunods}
  * - className = "toast-container" = ele tem uma classe para estlizar no css, no [styles->GlobalStyles]
    - pegando ele no [GlobalStyles] manda um caminho do toastify

# Axios
 - npm i axios
 - ele pega a nossa url e podemos usa-las

### Redux [store]
  - npm i redux react-redux
  - esta responsavel por pegar um estado e torna-lo acessivel por todos os componentes
      - dentro desse [store] temos as aplicações ao qual podemos
      criar um novo estado pegando os dados do atual e fazer validações, verificar, etc.

  - # Redux sagas
  * - npm i redux-sagasd
    - é um Midware
    - ele utiliza funções geradoras
    -  -   -
    - depois de toda configuração do [saga]
    - vmos importar o Middleware no [store--index]

  - # Redux Persist
  * - npm i redux-persist
    - ele decide onde vai salvar, ira salvar no localSotare do nav
    - qnd o user tiver feito login
    - [rootPersist] ele pega o (example') do [tootReducers]


