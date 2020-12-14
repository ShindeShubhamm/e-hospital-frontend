import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

import { authLogin, authLogout } from '../../lib/redux/actions/authActions';
import Layout from '../Layout/Layout';

const Login = (props) => {
  const { auth, onLogin, onLogout } = props;

  const handleLogin = () => {
    const userData = {
      firstName: 'Shubham',
      lastName: 'Shinde',
      email: 'shubhamshinde.3151@gmail.com',
    };
    onLogin(userData);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <Layout>
      <Container>
        {auth.isAuthenticated ? (
          <div className="main-wrapper">
            <h3>{auth.userInfo.firstName} {auth.userInfo.lastName}</h3>
            <h3>{auth.userInfo.email}</h3>
            <h3>token: {auth.token}</h3>
          </div>
        ) : (
            !auth.loading
              ? (
                <div className="main-wrapper">
                  <h3>Please Login!</h3>
                </div>
              ) : <div className="main-wrapper">Loading...</div>
          )}
        {!auth.isAuthenticated && (
          <Button
            onClick={handleLogin}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        )}
        {auth.isAuthenticated && (
          <Button
            onClick={handleLogout}
            variant="contained"
            color="primary"
          >
            Logout
          </Button>
        )}
      </Container>
    </Layout >
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
    onLogout: () => dispatch(authLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
