import React from 'react';
import PropTypes from 'prop-types';

function RepositoryList({ repositories }) {
  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}

RepositoryList.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default RepositoryList;