import React from 'react';
import PropTypes from 'prop-types';

import { GridContainer } from './styled';

export default function Cards02({ card02 }) {
  return (
    <GridContainer>
      {card02 &&
        card02.map((value, index) => (
          <div className={`tablesNumbrs_${value} num`} key={String(index)}>
            {value}
          </div>
        ))}
    </GridContainer>
  );
}

Cards02.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  card02: PropTypes.array.isRequired,
};
