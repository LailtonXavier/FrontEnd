import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/save/actions';
import history from '../../services/history';
import { ContainerMain } from '../../styles/GlobalStyles';
import { CenterHome } from './styled';

export default function Home() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErros = false;

    if (name.length === 0) {
      formErros = true;
      toast.error('Enter a name!');
    }

    if (formErros) return;

    dispatch(actions.searchByName({ name }));
    history.push('/users');
  };
  return (
    <ContainerMain>
      <CenterHome>
        <h1>Minha busca</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </CenterHome>
    </ContainerMain>
  );
}
