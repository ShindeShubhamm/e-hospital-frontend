import React from 'react';

import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

import FormHandler from '../../lib/forms';
import { authLogin } from '../../lib/redux/actions/authActions';

const Login = (props) => {
  const { auth, onLogin, onLogout } = props;

  const handleLogin = (data) => {
    // eslint-disable-next-line
    console.log(data);
    // onLogin(userData);
  };

  return (
    <Container maxWidth="md">
      <FormHandler
        form="SIGNUP"
        onSubmit={handleLogin}
        submitButtonLabel="Sign Up"
      />
      <FormHandler
        form="LOGIN"
        onSubmit={handleLogin}
        submitButtonLabel="Login"
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data) => dispatch(authLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
