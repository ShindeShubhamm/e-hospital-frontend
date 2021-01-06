import React from 'react';

import Overlay from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: '#fff !important',
    zIndex: 1400,
    opacity: 1,
  },
}));

const ScreenOverlay = (props) => {
  const { open } = props;
  const classes = useStyles();

  return (
    <div className="screen-overlay">
      <Overlay className={classes.backdrop} open={open}>
        <div className="so-content">
          <img
            src="/images/rx_online.svg"
            alt="Loading..."
            className="so-logo"
          />
          <div className="so-loading">
            <div className="so-loading-bar" />
          </div>
        </div>
      </Overlay>
    </div>
  );
};

ScreenOverlay.defaultProps = {
  open: false,
};

export default ScreenOverlay;
