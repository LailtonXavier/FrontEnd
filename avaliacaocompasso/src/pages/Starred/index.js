import React from 'react';
import PropTypes from 'prop-types';

export default function Starred({ starred }) {
  return (
    <>
      <div className="starreds">
        {starred.length !== 0 ? (
          starred.map((item) => <li key={String(item.id)}>{item.name}</li>)
        ) : (
          <li>Empty</li>
        )}
      </div>
    </>
  );
}

Starred.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  starred: PropTypes.array.isRequired,
};
