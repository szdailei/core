import React from 'react';

// eslint-disable-next-line react/prop-types
function Error({ error }) {
  return <h3>{error.toString()}</h3>;
}

export default Error;
