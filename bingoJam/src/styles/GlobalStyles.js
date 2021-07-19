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
    font-family: 'Courier New', Courier, monospace;
    background: ${colors.backTwo};
    color: ${colors.color};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    font-size: 25px;
    border-radius: 10px 10px 40px 40px;
    font-weight: 700;
    background: black;
    opacity: 0.5;
    color: white;
    border: none;
    margin-bottom: 10px;
    transition: all 0.4s;
  }

  button:hover {
    color: ${colors.colorTwo};
    background: ${colors.back}
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

export const ContainerMain = styled.section`
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;
