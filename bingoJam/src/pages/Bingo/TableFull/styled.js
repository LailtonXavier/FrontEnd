import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);

  background: #000;
  border-radius: 15px;
  border: 5px solid red;
  width: 510px;
  height: 550px;
  margin: auto;
  padding: 5px;
  color: #c30710;

  // I found Table main
  .iFound {
    color: #000;
    background: #ccc;
    opacity: 0.7;
  }

  .num {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    margin: 5px;
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  /* div {
    font-size: 30px;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
  } */

  .nameCards {
    border: none;
    color: red;
    background: white;
    font-weight: 800;
    font-size: 50px;
  }
  .cardsNumbrs_ {
    color: black;
  }
`;
