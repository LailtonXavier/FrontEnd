import styled from 'styled-components';

export const Center = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  .boll {
    border: 1px solid black;
    background: red;
    color: white;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

   {
    /* Tables */
  }
  .GridContainer {
    width: 350px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    background: #000;
    border: none;
    border-radius: 20px;

    position: relative;
  }
  #tablesNumbrs {
    border-radius: 50%;
    color: white;
    background: red;
    border: none;
    margin: 2px;
  }
  // I found number
  .iFound {
    color: red;
    background: white;
    font-weight: 500;
  }
  div:nth-child(18) {
    grid-column: 4/5;
    /* color: white; */
  }
  .nameBg {
    border: none;
    background: #000;
    font-weight: 800;
  }

  .mid {
    position: absolute;
    top: 51.1%;
    left: 43.5%;
    border-radius: 50%;
    background: black;
    border: none;
  }
  div {
    background-color: rgba(255, 255, 255, 0.8);
    border-right: 1px solid red;
    font-size: 30px;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
  }

  .bollRandom {
    background: #000;
    color: white;
    height: auto;

    text-align: center;
  }
`;

export const NumbRand = styled.div`
  color: ${(props) => (props.num ? 'green' : 'white')};
`;
