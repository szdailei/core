import React from "react";

// eslint-disable-next-line react/prop-types
function Error({ error }) {
  if (!error) return <h3>error object is null</h3>;

  return <h3>{error.toString()}</h3>;
}

export default Error;
