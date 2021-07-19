import React, { useState, useEffect } from 'react';

// import { FaChild } from 'react-icons/fa';
import { ContainerMain } from '../../styles/GlobalStyles';
import TableFull from './TableFull';
import Cards01 from './Cards01';
import Cards02 from './Cards02';
import Cards03 from './Cards03';
import { CardsMid, Center } from './styled';

export default function Bingo() {
  const [card01, setCard01] = useState(['']);
  const [card02, setCard02] = useState(['']);
  const [card03, setCard03] = useState(['']);
  const [numbRand, setNumbRandom] = useState(['']);
  const [tableMain, setTableMain] = useState(['']);
  const [showBoll, setSowBoll] = useState(['']);

  useEffect(() => {
    const showStack = document.querySelector('.showStack');
    showBoll.forEach((value, index) => {
      setTimeout(() => {
        showStack.innerHTML += `<p>${value}</p>`;
      }, 1000 * index);
    });
  }, [showBoll]);

  // Comparing the card01
  useEffect(() => {
    const show = document.querySelector('.boll');
    numbRand.forEach((value, index) => {
      setTimeout(() => {
        show.innerHTML = '';
        show.innerHTML = value;

        card01.forEach((valuesCard01) => {
          if (value === valuesCard01) {
            const numero = `.tablesNumbrs_${value}`;
            const numeroSelecionado = document.querySelector(numero);
            numeroSelecionado.classList.add('iFound');
          }
        });

        card02.forEach((valuesCard02) => {
          if (value === valuesCard02) {
            const numb = `.tablesNumbrs_${value}`;
            const numbSelected = document.querySelector(numb);
            numbSelected.classList.add('iFound');
          }
        });

        card03.forEach((valuesCard03) => {
          if (value === valuesCard03) {
            const numb = `.tablesNumbrs_${value}`;
            const numbSelected = document.querySelector(numb);
            numbSelected.classList.add('iFound');
          }
        });

        tableMain.forEach((valuesMain) => {
          if (value === valuesMain) {
            const numb = `.tablesFull_${value}`;
            const numbSelected = document.querySelector(numb);
            numbSelected.classList.add('iFound');
          }
        });
      }, 1000 * index);
    });
  }, [card01, card02, card03, numbRand, tableMain]);

  // Numbers Random
  const writeArray = (numbers) => {
    const arrayConvert = [...numbers];
    setNumbRandom(arrayConvert);
    setSowBoll(arrayConvert);
  };

  // Numbets Tables
  const writeCard01 = (numbers) => {
    const arrayConvert = [...numbers];
    setCard01(arrayConvert);
  };

  const writeCard02 = (numbers) => {
    const arrayConvert = [...numbers];
    setCard02(arrayConvert);
  };

  const writeCard03 = (numbers) => {
    const arrayConvert = [...numbers];
    setCard03(arrayConvert);
  };

  // Table Full Main
  const writeTableFull = () => {
    const arrayCard = [];
    for (let index = 1; index <= 90; index += 1) {
      arrayCard.push(index);
    }
    setTableMain(arrayCard);
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

  // generate02 Numberrs Card01
  const generate02 = (count = 15) => {
    const numbers = new Set();

    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (89 + 1) + 1));
    }
    writeCard01(numbers);
    return [...numbers];
  };

  // generate03 writeCard02
  const generate03 = (count = 15) => {
    const numbers = new Set();

    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (89 + 1) + 1));
    }

    writeCard02(numbers);
    return [...numbers];
  };

  const generate04 = (count = 15) => {
    const numbers = new Set();

    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (89 + 1) + 1));
    }

    writeCard03(numbers);
    return [...numbers];
  };

  const handleStart = () => {
    generate01();
    generate02();
    generate03();
    generate04();
    writeTableFull();
  };

  return (
    <ContainerMain>
      <Center>
        {/* TABLE FULL MAIN */}
        <TableFull tableMain={tableMain} />

        <CardsMid>
          <div className="boll">s</div>

          <Cards01 card01={card01} />

          <Cards02 card02={card02} />

          <Cards03 card03={card03} />
        </CardsMid>

        {/* ACTIVE NUMBER */}
        <div className="buttonStart">
          <button type="button" className="btnStart" onClick={handleStart}>
            Start
          </button>
          <div className="showStack" />
        </div>
      </Center>
    </ContainerMain>
  );
}

// Bingo.propTypes = {
//   color: PropTypes.string.isRequired,
// };
