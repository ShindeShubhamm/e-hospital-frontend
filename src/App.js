import React, { Fragment, useEffect } from 'react';

import ls from 'local-storage';
import { connect } from 'react-redux';

import AppRouter from './AppRouter';
import Backdrop from './components/common/Backdrop';
import ScreenOverlay from './components/common/ScreenOverlay';
import Snackbar from './components/common/Snackbar';
import { loadUser } from './lib/redux/actions/authActions';
import { snackClose } from './lib/redux/actions/snackbarActions';

import './styles/global.scss';

const App = (props) => {
  const { snackbar, backdrop, handleSnackClose, loadUser, overlay } = props;

  useEffect(() => {
    if (ls.get('token')) {
      loadUser();
    }
  }, []);

  return (
    <Fragment>
      <AppRouter />
      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleSnackClose}
      />
      <Backdrop open={backdrop} />
      <ScreenOverlay open={overlay} />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    snackbar: state.snackbar,
    backdrop: state.backdrop,
    overlay: state.overlay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSnackClose: () => dispatch(snackClose()),
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
