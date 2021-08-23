import React from 'react';
import { Link } from 'react-router-dom';
import { Center } from './style';

export function Header() {
  return (
    <Center>
      <h1>
        <Link to="/">Meus Hooks</Link>
      </h1>

      <div className="Navs">
        <Link to="/useState">useState</Link>
        <Link to="/useEffect">useEffect</Link>
        <Link to="/useRef">useRef</Link>
        <Link to="/useContext">useContext</Link>
        <Link to="/useReducer">useReducer</Link>
        <Link to="/useCalback">useCallback</Link>
        <Link to="/useLayoutEffect">useLayoutEffect</Link>
        <Link to="/useMemo">useMemo</Link>
      </div>
    </Center>
  );
}
