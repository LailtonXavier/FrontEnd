import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Courier New', Courier, monospace;
    background: #ccc;
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

  ul {
    list-style: none;
  }
`;

export const ContainerMain = styled.section`
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;
