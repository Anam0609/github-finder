import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className='lead'>The page you are looking for does not exist...</p>
    </div>
  );
};

export default NotFound;

// if user searches or accesses the wrong page, this will be displayed.