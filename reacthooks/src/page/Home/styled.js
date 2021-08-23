import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;

  h1 {
    font-size: 28px;
    text-decoration: underline;
  }

  p {
    margin: 5px;
    text-indent: 50px;
    font-size: 20px;
  }
  border: 1px solid red;
`;
