import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
import phtoBack from '../page/phishing.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background: ${colors.color1};
    background-image: url(${phtoBack});
    background-size: 70%;
    background-position: bottom;
    background-repeat: no-repeat;
    color: ${colors.backTow};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    width: 30%;
    margin: 5px;
    padding: 10px;
    background: ${colors.back};
    color: ${colors.color};
    font-size: 16px;
    font-weight: bold;
    border-radius: 20px;
  }

  a {
    text-decoration: none;
    transition: all 0.5s;
      }

      a:hover {
    transform: scaleY(2);
    filter: drop-shadow(2px 1px 5px ${colors.backTrd});
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
  max-width: 900px;
  margin: 10px auto;
  padding: 10px;
  background-image: linear-gradient(to top, #7c83fd, #96baff, #7dedff);
  box-shadow: 1px 10px 20px 10px ${colors.backTow};
  opacity: 0.9;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;

  .codes {
    width: 350px;
    height: 220px;
    padding: 5px;
    overflow: auto;
    background: ${colors.color1};
    color: ${colors.backTrd};

    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 28px;
    text-decoration: underline;
    margin-bottom: 5px;
  }

  p {
    margin: 5px;
    text-indent: 50px;
    font-size: 20px;
  }

  strong {
    color: ${colors.color4};
  }
  border: 1px solid red;

  // animation button
  .animaBt {
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s;
    border: 1.5px solid white;
    color: white;
    padding: 10px 20px;

    // shap animation keyframe but
    position: relative;
    animation-name: but;
    animation-duration: 0.8s;
  }
  .animaBt:hover {
    transform: scale(1.5, 1.5);
    border: 1.5px solid white;
    box-shadow: 1px 1px 10px white;
  }

  // --- Fim anima Button

  @keyframes but {
    0% {
      box-shadow: 10px 1px 20px white;
      left: -200%;
    }
    25% {
      box-shadow: -10px 10px 20px white;
      left: 4%;
    }
    50% {
      box-shadow: 10px 10px 20px white;
      left: -4%;
    }
    100% {
      box-shadow: 1px 1px 10px white;
      left: 0%;
    }
  }

  // anima drops = caindo algo de cima
  .animaDrops {
    color: red;

    position: relative;
    animation-name: drops;
    animation-duration: 0.7s;
  }

  @keyframes drops {
    0% {
      top: -80px;
    }
    25% {
      top: 20px;
    }
    50% {
      top: -40px;
    }
    75% {
      top: 10px;
    }
    100% {
      top: 0px;
    }
  }
`;
