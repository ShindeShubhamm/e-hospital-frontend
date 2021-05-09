import React from 'react';

import { CircularProgress } from '@material-ui/core';

const Loader = (props) => {
  const { text } = props;

  return (
    <div className="loader">
      <CircularProgress className="circle" />
      <p>{text}</p>
    </div>
  );
};

Loader.defaultProps = {
  text: 'Loading...',
};

export default Loader;
