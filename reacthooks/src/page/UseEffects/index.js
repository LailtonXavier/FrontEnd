import React, { useEffect, useState } from 'react';

import { Center, Container } from '../../styles/GlobalStyles';

export default function UseEffects() {
  const [age, setAge] = useState(0);

  const handeClick = () => setAge(age + 1);
  // const clearClick = () => setAge(0);

  useEffect(() => {
    if (age === 0) return;
    const H1s = document.querySelector('.updateAge');
    H1s.innerText = `${age}`;
  });

  return (
    <Container>
      <Center>
        <h1 className="updateAge">UseEffect:</h1>
        <p>
          {' '}
          Imagine uma situação: queremos os dados de uma API quando simplismente
          ao abrir o site, um exemplo bem real, no Facebook so de fazermos login
          os dados já são carregados, tipo: posts das pessoas, anuncios, etc.
        </p>
        <p>
          Sacada do UseEffect: <br />
          Se fossemos resolver esse tipo de funcionalidade, simplismente o{' '}
          <strong>useEffect</strong>
          seria a solução.
        </p>
        <p>
          Mais o que faz o useEffect? <br />
          Ele de executa uma função, faz uma chamada API logo de imediato, ou
          quando há alguma alteração na função, array, etc.
        </p>
        <p>
          Exemplo simples:
          <div className="codes">
            <strong>age</strong> seria minha variavel que ira ao clicar ira
            incrementar, aumento seu valor. o <strong>useEffect</strong> vai
            pegar essa alteração e mudar o titulo do UseEffect
          </div>
        </p>
        <button type="button" className="animaBt" onClick={handeClick}>
          Aumentar sua idade: {age}
        </button>
      </Center>
    </Container>
  );
}
