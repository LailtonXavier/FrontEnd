import styled from 'styled-components';

export const Center = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 20px;
  margin: auto;

  /** Boll Random */
  .boll {
    border: 1px solid black;
    background-image: radial-gradient(circle, red, yellow);

    /* box-shadow: inset -10px -10px 10px #660, inset 10px 3px 3px #660; */
    color: white;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 30px;
  }
  /**Button */
  .buttonStart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40px;
    color: red;

    text-align: center;
  }

  .btnStart {
    position: absolute;
    top: 110px;
  }

  .showStack {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    border: 1px solid red;
    width: 100px;
    height: 300px;
    overflow: hidden;
    font-size: 25px;

    /* position: absolute; */
  }
  p {
    /* position: relative;
    top: 155px; */

    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background: black;
    margin: 5px;
    padding: 5px;
    color: white;
    font-size: 25px;
  }
`;

export const CardsMid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
