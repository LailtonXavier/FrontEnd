import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-image: linear-gradient(to top,  #7d8597,  #5c677d,#33415c);
    color: blue;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
      }
  li {
    list-style: none;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.success}
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.error}
  }

`;

export const Container = styled.section`
  max-width: 1200px;
  background-image: linear-gradient(to top, #7c83fd, #96baff, #7dedff);

  display: flex;
  justify-content: center;
  align-items: center;
`;
