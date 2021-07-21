### `npm start`


- antes de colocar pra rodar precisa fazer a instalação do node_modules
com `npm i`

depois: digite no terminal `npm run start`

### refornçando ` npm i` + `npm run start`

 http://localhost:3000

 - Falando sobre o erro:
    uso o `prettier e eslint para configurar o projeto`
    com isso, minha maquina ja esta com o ´LF ou CRLF´ configurado
    para deixar apenas um, por isso roduo em minha maquina,
    Dai no arquivo `.eslint.json` coloquei:

    "prettier/prettier": ["error",{
            "endOfLine": "auto"}
          ],

  com isso deixando automatico tanto LF ou CRLF


 ### `esplicando as tecnologias usadas:`

  - Usei React, Styled-components, Hooks, Redux (redux saga, redux persist), React Router Dom, Toastify

  - `Hooks`: useState e useEffect
    - useState para salva os dados, guardando em um array para usa-lo logo
    em seguida
    - useEffect para carregar ja os dados prontos e fazer a chamada na Api

  - `Styled-components`: Usei para fazer a eslização  pagina.

  - `Redux`: action, reducer e sagas
    - os Tres acima, para pegar o dados enviado pelo o input e em seguida
    compartilha para o component Users.

  - Usei Redux Saga para pegar o nome da chamada para pesquisa e compartilha
      no component Users, mostrando como é interessante fazer esaa
      funcionalidade com Redux

  - `Redux persist`:
     - poderia usar para salva os dados no local Storage, por exemplo o Token do usuario

  - `toastify`:
    - toastify muito bom de trabalhar, pois da pra colocar os erros ja estilizados e podemos pernalizar tambem.

    - `RESUMINDO`: foi um projeto muito interessante de fazer, creio que o mais
    complicado é sempre fazer as configurações do ambiente e sempre rever as
    versões pois isso pode dar alguns erros (como aconteceu comigo, usei o History junto com Router Dom, e a versão 5x não roda, ou seja, resolvi mudando para uma versão anterior)

    - `ESPERO MUITO QUE COM ESSE PROJETO A EMPRESA VEJA O MEU TRABALHO`
    - `É SEMPRE BOM UM DESAFIO ...`


    - `Lailton Xavier`







