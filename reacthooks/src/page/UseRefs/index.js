import React from 'react';

import { Center, Container } from '../../styles/GlobalStyles';
import { Anima } from './styled';

export default function UseRefs() {
  return (
    <Container>
      <Center>
        <Anima>
          <h1 className="animaDrops">UseRef:</h1>
          <p>Quand textando corrigir</p>
          <button type="button" className="animaBt">
            Teste
          </button>
          <button type="button" className="animaBt">
            Teste
          </button>
          <button type="button" className="animaBt">
            Teste
          </button>
        </Anima>
      </Center>
    </Container>
  );
}
