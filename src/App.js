import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Backdrop from './components/common/Backdrop';
import Snackbar from './components/common/Snackbar';
import Layout from './components/Layout/Layout';

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
    setSnackbar({
      open: false,
      message: '',
      severity: '',
    });
    setTimeout(() => {
      setBackdrop(false);
    }, 500);
  };

  const sample = new Array(10).fill(0);

  return (
    <Layout>
      <Container>
        <div className="main-wrapper">
          {sample.map((_, i) => (
            <p className={`f${i + 1}`} key={i}>The quick brown fox jumps over the lazy dog</p>
          ))}
          <Snackbar
            open={snackbar.open}
            message={snackbar.message}
            severity={snackbar.severity}
            onClose={handleClose}
          />
          <Backdrop open={backdrop} />
          <Button onClick={handleClick} variant="contained" color="primary">Open</Button>
        </div>
      </Container>
    </Layout>
  );
};

export default App;
