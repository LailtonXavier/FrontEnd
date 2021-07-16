import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { CenetHd } from './styled';

const Header = () => (
  <CenetHd>
    {' '}
    <Link to="/">
      <FaHome className="icons" size={30} />
    </Link>
    <p>Avaliação Compasso</p>{' '}
  </CenetHd>
);
export default Header;
