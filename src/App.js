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
    <div className="main-wrapper">
      <p className="f1">The quick brown fox jumps over the lazy dog</p>
      <p className="f2">The quick brown fox jumps over the lazy dog</p>
      <p className="f3">The quick brown fox jumps over the lazy dog</p>
      <p className="f4">The quick brown fox jumps over the lazy dog</p>
      <br />
      <p className="f5">The quick brown fox jumps over the lazy dog</p>
      <p className="f6">The quick brown fox jumps over the lazy dog</p>
      <p className="f7">The quick brown fox jumps over the lazy dog</p>
      <p className="f8">The quick brown fox jumps over the lazy dog</p>
      <p className="f9">The quick brown fox jumps over the lazy dog</p>
      <p className="f10">The quick brown fox jumps over the lazy dog</p>
      <Snackbar open={snackbar.open} message={snackbar.message} severity={snackbar.severity} onClose={handleClose} />
      <Backdrop open={backdrop} />
      <Button onClick={handleClick} variant="contained" color="primary">Open</Button>
    </div>
  );
};

export default App;
