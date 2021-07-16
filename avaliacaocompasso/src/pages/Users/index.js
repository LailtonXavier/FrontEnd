import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

import { ContainerMain } from '../../styles/GlobalStyles';
import Repos from '../Repos';
import Starred from '../Starred';
import { Center, ContainerRepos } from './styled';

export default function Users() {
  const name = useSelector((state) => state.save.user.name);
  const [names, setNames] = useState(['']);
  const [repos, setRepos] = useState(['']);
  const [starred, setStarred] = useState(['']);
  const [isLoading, setIsLoading] = useState(false);

  const reposs = document.querySelector('.repos');
  const starreds = document.querySelector('.starreds');

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(`/users/${name}`);
      setNames(data);
      setIsLoading(false);
    }
    getData();
  }, [name, names]);

  const handleCl = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/users/${name}/repos`);
      setRepos(response.data);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error(err);
    }

    reposs.style.display = 'block';
    starreds.style.display = 'none';
  };

  const handleStarred = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/users/${name}/starred`);
      setStarred(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error(err);
    }

    starreds.style.display = 'block';
    reposs.style.display = 'none';
  };

  return (
    <ContainerMain>
      <Loading isLoading={isLoading} />
      <Center>
        <ContainerRepos>
          <Repos repos={repos} handleCl={handleCl} />

          <Starred starred={starred} />
        </ContainerRepos>

        <div className="ContainerLeft">
          <img src={names.avatar_url} alt="Photos" />
          <p> {names.login}</p>

          <div className="btns">
            <button type="button" onClick={handleCl}>
              Repos
            </button>
            <button type="button" onClick={handleStarred}>
              Starred
            </button>
          </div>
        </div>
      </Center>
    </ContainerMain>
  );
}
