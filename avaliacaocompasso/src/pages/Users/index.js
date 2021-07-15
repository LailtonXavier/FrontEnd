import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from '../../services/axios';
// import history from '../../services/history';
import { ContainerMain } from '../../styles/GlobalStyles';
// import PhotoUsers from '../PhotoUsers';
import { Center } from './styled';

const Users = () => {
  const [names, setNames] = useState('');
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(`${location.state}`);
      setNames(data);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <ContainerMain>
      <Center>
        {names.login}
        {<img src={names.avatar_url} alt="pshoto" />}
      </Center>
    </ContainerMain>
  );
};

// {/* <div className="search">
//   <div className="inputWithIcon">
//     {/* <form onSubmit={handleSubmit}> */}
//     <input
//       type="text"
//       value={names}
//       onChange={(e) => setNames(e.target.value)}
//     />
//     {/* <button type="button">Enviar</button> */}
//     <Link className="icon" to={`users/${names}`}>
//       <FaSearch size={25} />
//     </Link>
//     {/* </form> */}
//   </div>
// </div> */}
// **/

export default Users;
