import styled from 'styled-components';
import * as colors from '../../config/colors';

export const CenterHome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${colors.colorLinear3};
  width: 450px;
  border-radius: 8px;
  opacity: 0.8;

  h1 {
    font-size: 2.5rem;
    margin: 10px;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input,
  button {
    height: 40px;
  }

  input {
    background: ${colors.colorLinear5};
    color: white;
    border: none;
    border-radius: 25px;
    padding-left: 10px;
    font-size: 25px;
    margin-bottom: 10px;
    box-shadow: 1px 10px 20px black;
  }
`;
