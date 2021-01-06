import React, { Fragment } from 'react';

import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Snackbar = (props) => {
  return (
    <Fragment>
      {props.message && props.severity && (
        <MuiSnackbar
          open={props.open}
          autoHideDuration={6000}
          onClose={() => props.onClose()}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity={props.severity} onClose={() => props.onClose()}>
            {props.message}
          </Alert>
        </MuiSnackbar>
      )}
    </Fragment>
  );
};
Snackbar.defaultProps = {
  severity: '',
  onClose: () => {},
  open: false,
  message: '',
};

export default Snackbar;
