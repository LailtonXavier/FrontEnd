import styled from 'styled-components';

export const Anima = styled.div`
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


`;
