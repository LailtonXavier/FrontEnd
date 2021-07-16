import React from 'react';
import PropTypes from 'prop-types';

export default function Repos({ repos }) {
  return (
    <>
      <div className="repos">
        {repos.length !== 0 ? (
          repos.map((item) => <li key={String(item.id)}>{item.name}</li>)
        ) : (
          <li>Empty repository</li>
        )}
      </div>
    </>
  );
}

Repos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  repos: PropTypes.array.isRequired,
};
