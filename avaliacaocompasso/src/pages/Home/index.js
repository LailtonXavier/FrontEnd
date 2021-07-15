import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ContainerMain } from '../../styles/GlobalStyles';

export default function Home() {
  const [name, setName] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push({
      pathname: '/users/',
      state: name,
    });
  };
  return (
    <ContainerMain>
      <h1>Minha busca</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <Link to="/repos/">Foi</Link>
    </ContainerMain>
  );
}
