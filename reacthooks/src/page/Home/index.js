import React from 'react';
import { Container, Center } from '../../styles/GlobalStyles';

export default function Home() {
  return (
    <Container>
      <Center>
        <h1 className="animaDrops">Os Hooks</h1>
        <p>
          Podemos usar desde a versão 16.8 do React, veremos alguns nesse post,
          mas antes devemos nos perguntar: para que serve? onde devo usar?, é
          preciso usar em todos os meus projetos?
        </p>
        <p>
          A resposta seria que, você pode usar <i>Aonde quiser</i> e em qualquer
          projeto, a função dos Hooks são para facilitar a funcionalidade de
          muitas funções nossa, para deixar um codigo mais{' '}
          <strong>Clean</strong>
        </p>
        <p>
          <code>Veja um Hook por vez...</code>
        </p>
      </Center>
    </Container>
  );
}
