import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import { FaChild } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { Center } from './styled';

export default function Bingo() {
  const [tables, setTables] = useState(['']);
  const [numbRand, setNumbRandom] = useState(['']);
  // const [test, setTest] = useState(['']);
  console.log(tables);
  console.log(numbRand);

  useEffect(() => {
    const show = document.querySelector('.boll');
    // const cor = document.getElementById('tablesNumbrs').innerHTML;
    // const cor = document.getElementById('tablesNumbrs');
    numbRand.forEach((value, index) => {
      setTimeout(() => {
        show.innerHTML = '';
        show.innerHTML = value;

        tables.forEach((valuesTables, indexTab) => {
          if (value === valuesTables) {
            console.log(`achei: ${tables[indexTab]}`);
            // cor.setAttributeNS(tables[indexTab], 'className', 'iFound'); // ELE SO ADICIONA NO PRIMEIRO INDICE, NÃO NOS NUMEROS QUE ESTA SAINDO
            // tables[indexTab] = cor.classList.add('iFound); // ele seria a segunda forma de adicionar uma classe

            // explicando
            //  aqui mostra os dois numeros igual tanto na tabela quanto os aleatorios
            // minha logica era adicionar uma Class no indice que saiu, porem ele n faz
            // O problema que aparece é que estou add uma Classe no Filho e não no Pai
            // dai usei metodos para  apontar para o pai, mas n vai msm asssim, ele diz que n reconhe
            // o metodo.
            // oq vc faria? ou onde estou  errando?
            //     setTest(tables[i]);
          }
        });
      }, 1000 * index);
    });
  }, [tables, numbRand]);

  const writeArray = (numbers) => {
    const arrayConvert = [...numbers];
    setNumbRandom(arrayConvert);
  };

  // Numbets Tables
  const writeTables = (numbers) => {
    const arrayConvert = [...numbers];
    setTables(arrayConvert);
  };

  // generate01 is numbers Random
  const generate01 = (count = 10) => {
    const numbers = new Set();

    while (numbers.size < count) {
      // numbers.add(Math.floor(Math.random() * (75 + 1) + 1)); FORMA CERTA 1 A 75
      numbers.add(Math.floor(Math.random() * (10 + 1) + 1));
    }
    writeArray(numbers);
    return [...numbers];
  };

  // generate02 Numberrs Tables
  const generate02 = (count = 24) => {
    const numbers = new Set();

    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (75 + 1) + 1));
    }

    writeTables(numbers);
    return [...numbers];
  };

  const handleStart = () => {
    generate01();
    generate02();
  };

  return (
    <Container>
      <Center>
        {/* <h3>iguais: {test}</h3> */}
        {/* <button type="button" onClick={goo}> */}
        {/* Click 28 ago niver, bat
        </button> */}
        {/* TABLE MAIN */}
        <div className="GridContainer">
          <div className="nameBg">B</div>
          <div className="nameBg">I</div>
          <div className="nameBg">N</div>
          <div className="nameBg">G</div>
          <div className="nameBg">O</div>

          {tables &&
            tables.map((value, index) => (
              <div id="tablesNumbrs" key={String(index)}>
                {value}
              </div>
            ))}
          <div className="mid">
            <FaChild size={28} />
          </div>
        </div>
        <div className="boll">s</div>
        {/* ACTIVE NUMBER */}
        <div className="bollRandom">
          <button type="button" onClick={handleStart}>
            Start
          </button>
        </div>
      </Center>
    </Container>
  );
}

// Bingo.propTypes = {
//   color: PropTypes.string.isRequired,
// };
