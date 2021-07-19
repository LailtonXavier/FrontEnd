import React from 'react';
import PropTypes from 'prop-types';
import { CardsContainer } from './styled';

export default function TableFull({ tableMain }) {
  return (
    <CardsContainer>
      {tableMain &&
        tableMain.map((value, index) => (
          <div
            className={`tablesFull_${value} num cardsDiv`}
            key={String(index)}
          >
            {value}
          </div>
        ))}
    </CardsContainer>
  );
}

TableFull.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tableMain: PropTypes.array.isRequired,
};
