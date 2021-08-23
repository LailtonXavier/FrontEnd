import React, { useState } from 'react';

import { Center, Container } from '../../styles/GlobalStyles';

export default function UseStates() {
  const [cont, setCont] = useState(0);
  return (
    <Container>
      <Center>
        <h1 className="animaDrops">UseState:</h1>
        <p>
          Quando precisamos guardar algo em uma caixa, em um array, podemos usar
          <strong> useState</strong> passando alguma coisa como seu valor
          inicial. Em outras palavras o <strong>useState</strong> servi para
          salva um estado e que pode ser um{' '}
          <strong>Array, Obj, String, Bolleano e Null</strong>
        </p>
        <div className="codes">
          <pre>
            import React, &#10100; useState &#10101; const [ cont, setCont ] =
            useState(0) button - setCont(cont + 1)
          </pre>
        </div>

        <button
          type="button"
          className="animaBt"
          onClick={() => setCont(cont + 1)}
        >
          Contar:{cont}
        </button>
        <button type="button" className="animaBt" onClick={() => setCont(0)}>
          Reset para 0
        </button>
      </Center>
    </Container>
  );
}
