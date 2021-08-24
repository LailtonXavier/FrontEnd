### todos os arquivos que precisam ser importados
{
	npm i eslint babel-eslint prettier eslint-config-prettier eslint-plugin-prettier -D
	npx eslint --init

	npm install --save prop-types

	npm i styled-components

	npm install framer-motion

	npm i react-icons --save

	npm i react-router-dom

	npm i history
	npm i history@4.10.1

	npm i react-toastify --save
}

corrigir erro
npm audit fix

  Prettier  = vai deixar o codigo mais bonito, bem formatado
  pega
  npm i eslint babel-eslint prettier eslint-config-prettier eslint-plugin-prettier -D
  npx eslint --init

adiciona a extensão editorConfig
  - adc no projeto: botao direito e generationEditioconfig
  dentro coloca essas configurações
    root = true

              [*]
              end_of_line = lf
              indent_style = space
              indent_size = 2
              charset = utf-8
              trim_trailing_whitespace = true
              insert_final_newline = true


Foram feitas tres configurações, eslint, prettier e editorConfig

.prettierrc
{
  "singleQuote": true,
  "trailingComma": es5
}

.eslint.json
{
       "extends":{
  	"prettier"
	 }
	"parser": "babel-eslint",

	"plugins": [
	  "react",
	  "prettier",
	  "react-hooks"
	]
	"rules": {
	       "prettier/prettier": ["error",{
          "endOfLine": "auto"}
        ],
        "react/jsx-filename-extension": "off", // esses dois esta relacionado ao tipo jsx
        "react/react-in-jsx-scope":"off",           //
        "import/prefer-default-export": 0,  // relacionado a funções padroes
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
         "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    }
      

}

  Aprender test so qnd terminar tudo,

    ...
    Pastas:
      - pages > todas as paginas da nossa app vai aqui dentro
          (componente global tipo um cabeçalho)
      - components > vai um campo separado de nosso site


.   Não vamos utilizar classes vamos ultilizar os Hooks para manipular os estados
      React hooks para manipulas o estados dos components

 

Map mental
      - prop-types
	npm install --save prop-types

      - styled conponents
	- npm i styled-components
      - config/cores
      - styles=>GlobalStyles
	- GlobalStyles.js
  /*   unidade de medida = rem
     1rem = ao tamanho do corpo da aplicação (16)
     Explicando com o media
     pq 93.75%
        16 * 0.9375 = 15
      ele ta diminuindo 1px para tds elementos
            no mobile = ele diminui pra 14px
    */

{
	-
	@media(max-width: 1800px){
	    html{
        font-size: 93.75%;
    		}
	}

@media(max-width: 720px){
    html{
        font-size: 87.5%;
    }
}
body, input, textarea, button{
    font: 400 2rem "inter" ;
}
-

}

      - Carousel cards
	-npm install react-multi-carousel --save
	import Carousel from 'react-multi-carousel';
	import 'react-multi-carousel/lib/styles.css';
	
	ou

       - Frame Motion
	- npm install framer-motion


      - conponents/Header
          > icones
	npm i react-icons --save
	vesiorn . v11.6.0 atualizar

      - React Roucter DOM
	- npm i react-router-dom
	- routers > vai ficar nossa paginas para o roteamento
        > no App.js add a Routes
      - vms trocar, BrowserRouter para Router history

        > src - services (vai tar os axios tbm e o history )
      - services - history
	- npm i history
	- npm i history@4.10.1
	- corrigindo a versão

      - React Toastify = comunicar com quem falar co
	- npm i react-toastify --save

      - Axiors Configurando
     	   > npm i axios
        > no services cria axios.js
          -precisa de inicio pegar a url pai
        > React Hooks (useEffect)
          - useEffect ele vai substituir varias coisas utilizadas no classe components
            - qnd ela é colocada na tela é executada, ou seja
        > o axios me retorna Promisse
            - resumindo o que ele fez com axios foi que: ele criou uma classe com a url padrão
                - usando async await como requesição para pegar os dados da Api

        > Redux : vai servir para configurar um estado global
            - nem em todas app vms precisar usar Redux, so vms precisar
              - se a gente precisa acessar o msm dado que esta nos components, 

