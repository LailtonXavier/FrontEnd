import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  border: 5px solid red;
  margin: 8px;

  width: 300px;
  height: 150px;
  background: #000;
  border-radius: 15px;
  padding: 5px;
  color: #c30710;

  // I found number
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
    font-size: 25px;
    font-weight: 600;
    /* padding: 5px; */
    /* background: #ccc; */
    /* border-radius: 50%; */
  }
`;
/**
 * LOGICA
 *
 * INDICE = 0 a 14
 *
 * 0 1 2
 *
 *
 */
