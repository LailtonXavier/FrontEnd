import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Error } from './styled';

export default function Page404() {
  return (
    <Container>
      <Error>
        <h2>error 404</h2>
      </Error>
    </Container>
  );
}
