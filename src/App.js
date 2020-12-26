import React, { Fragment, useEffect } from 'react';

import ls from 'local-storage';
import { connect } from 'react-redux';

import AppRouter from './AppRouter';
import Backdrop from './components/common/Backdrop';
import Snackbar from './components/common/Snackbar';
import { loadUser } from './lib/redux/actions/authActions';
import { snackClose } from './lib/redux/actions/snackbarActions';
// import setAxiosToken from './utils/setAxiosToken';

import './styles/global.scss';

const App = (props) => {
  const { snackbar, backdrop, handleSnackClose, loadUser } = props;

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
    loadUser: () => dispatch(loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
