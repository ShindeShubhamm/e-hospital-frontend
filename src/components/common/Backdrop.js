import React from 'react';

import { Backdrop as BackDrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: '#fff',
  },
}));

const Backdrop = (props) => {
  const classes = useStyles();
  return (
    <BackDrop className={classes.backdrop} open={props.open}>
      <CircularProgress color="inherit" />
    </BackDrop>
  );
};

Backdrop.defaultProps = {
  open: false,
};

export default Backdrop;
