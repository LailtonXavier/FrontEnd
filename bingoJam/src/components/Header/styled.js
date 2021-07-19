import styled from 'styled-components';
import * as colors from '../../config/colors';

export const CenetHd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.back};
  color: ${colors.colorTwo};
  padding: 20px;

  p {
    font-size: 25px;
    font-weight: 600;
  }

  .icons {
    color: white;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 50px;
    transition: all 0.5s;
  }
  .icons:hover {
    color: #001233;
    background: #5c677d;
    padding: 5px;
  }
`;
