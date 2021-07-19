import React from 'react';
import PropTypes from 'prop-types';

import { GridContainer } from './styled';

export default function Cards01({ card01 }) {
  return (
    <GridContainer>
      {card01 &&
        card01.map((value, index) => (
          <div className={`tablesNumbrs_${value} num`} key={String(index)}>
            {value}
          </div>
        ))}
    </GridContainer>
  );
}

Cards01.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  card01: PropTypes.array.isRequired,
};
