import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Center = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  color: ${colors.color1};

  h1 {
    font-size: 28px;
    margin-left: 10px;
  }

  .Navs {
    display: flex;
    justify-content: space-between;
    margin: 5px;

    a {
      margin: 8px;
      font-size: 20px;
    }
  }
`;
