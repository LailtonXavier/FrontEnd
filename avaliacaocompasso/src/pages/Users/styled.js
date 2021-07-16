import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Center = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;

  background: ${colors.colorLinear3};
  width: 1200px;
  height: 100%;
  border-radius: 8px;
  opacity: 0.8;

  @media (max-width: 1020px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  .ContainerLeft {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    .btns {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    button {
      width: 100%;
    }

    img {
      width: 200px;
      border-radius: 50%;
      margin: 10px auto;
    }

    p {
      font-size: 30px;
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: 10px;
    }
  }
`;

export const ContainerRepos = styled.section`
  height: 500px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  display: flex;
  justify-content: center;
  padding: 10px;

  // Scroll

  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.back};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.backTwo};
  }

  .repos,
  .starreds {
    display: none;

    color: ${colors.colorTwo};
    font-weight: 600;
    padding: 10px;
    font-size: 25px;
    margin: 2px;
    text-align: left;
  }
`;
