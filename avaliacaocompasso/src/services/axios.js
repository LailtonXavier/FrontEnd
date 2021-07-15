import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com',
});

/**
 *
 * Fazer a persquisa
 * usuario seria meu estado no input
 * axios.get(url ${usuario} / repos)
 *
 *
 *   client_id: 'e9f429cbd3b48799a649',
  client_secret: '0d9e019b946f1d5ff68336c45ce2905e08ad0cc9',



  import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

api.interceptors.request.use(async config => {
  // Declaramos um token manualmente para teste.
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

 */
