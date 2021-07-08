import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

/**
 *  estou usando uma fake api e exemplo usando a chamada
 *
 * https://www.youtube.com/watch?v=87exQdoIoco
 * https://jsonplaceholder.typicode.com
 *     /posts	            100 posts
        /comments    	500 comments
        /albums	         100 albums
        /photos	          5000 photos
        /todos	           200 todos
        /users	            10 users

        chamdas

        GET	/posts
        GET	/posts/1
        GET	/posts/1/comments
        GET	/comments?postId=1
        POST	/posts
        PUT	/posts/1
        PATCH	/posts/1
        DELETE	/posts/1

        exemplo na pagina de Login

          import axios from '../../services/axios';

        export default function Login() {
                    // compo\nentDidMouth =  a gentee usava qnd um componente é montado
                    // pegando os dados
              React.useEffect(() => {
            async function getData() {
                  const response = await axios.get('/users');
                    const { data } = response;
                      console.log(data)
                      // console.log(response);
                  }
                getData();
             }, []);
 */
