import React from 'react';

import { connect } from 'react-redux';

import FormHandler from '../../../lib/forms';
import { authLogin } from '../../../lib/redux/actions/authActions';
import AuthLayout from '../AuthLayout';

const Login = (props) => {
  const { auth, onLogin } = props;

  const handleLogin = (data) => {
    onLogin(data);
  };

  return (
    <AuthLayout type="login">
      <FormHandler form="LOGIN" onSubmit={handleLogin} submitButtonLabel="Login" />
    </AuthLayout>
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
