import React, { useState } from 'react';

import { Button } from '@material-ui/core';

import Backdrop from './components/common/Backdrop';
import Loading from './components/common/Loading';
import Snackbar from './components/common/Snackbar';

import './styles/global.scss';

const App = () => {
  const [backdrop, setBackdrop] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });

  const handleClick = () => {
    setBackdrop(true);
    setSnackbar({
      open: true, message: 'Hello World!', severity: 'success',
    });
  };

  const handleClose = () => {
    setBackdrop(false);
    setSnackbar({
      open: false,
      message: '',
      severity: '',
    });
  };

  return (
    <div className="main">
      <Loading />
      <Snackbar open={snackbar.open} message={snackbar.message} severity={snackbar.severity} onClose={handleClose} />
      <Backdrop open={backdrop} />
      <Button onClick={handleClick}>Open</Button>
    </div>
  );
};

export default App;
