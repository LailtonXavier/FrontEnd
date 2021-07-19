import React from 'react';
import PropTypes from 'prop-types';

import { GridContainer } from './styled';

export default function Cards03({ card03 }) {
  return (
    <GridContainer>
      {card03 &&
        card03.map((value, index) => (
          <div className={`tablesNumbrs_${value} num`} key={String(index)}>
            {value}
          </div>
        ))}
    </GridContainer>
  );
}

Cards03.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  card03: PropTypes.array.isRequired,
};
