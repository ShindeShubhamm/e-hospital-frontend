import React, { Fragment } from 'react';

import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bottom: {
    color: '#3F51B5',
    animationDuration: '550ms',
    margin: 'auto',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box display="flex" justifyContent="center" m={1}>
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.bottom}
          size={30}
          thickness={5}
        />
      </Box>
    </Fragment>
  );
};

export default Loading;
