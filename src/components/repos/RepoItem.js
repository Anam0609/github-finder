import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

// accesses the repo items such as name and the url to the user's github account

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
