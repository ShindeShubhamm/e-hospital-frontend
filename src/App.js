import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import Backdrop from './components/common/Backdrop';
import Snackbar from './components/common/Snackbar';
import Login from './components/Login/Login';
import { snackClose } from './lib/redux/actions/snackbarActions';

import './styles/global.scss';

const App = (props) => {
  const { snackbar, backdrop, handleSnackClose } = props;

  return (
    <Fragment>
      <Login />
      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleSnackClose}
      />
      <Backdrop open={backdrop} />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    snackbar: state.snackbar,
    backdrop: state.backdrop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSnackClose: () => dispatch(snackClose()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
