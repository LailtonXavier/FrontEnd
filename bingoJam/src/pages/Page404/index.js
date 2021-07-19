import React from 'react';

import { ContainerMain } from '../../styles/GlobalStyles';
import { Error } from './styled';

export default function Page404() {
  return (
    <ContainerMain>
      <Error>
        <h2>error 404</h2>
      </Error>
    </ContainerMain>
  );
}
