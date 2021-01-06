import React from 'react';

import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const AuthLayout = (props) => {
  return (
    <div className="auth-layout">
      <Container maxWidth="sm">
        <div className="auth-children">
          <Link to="/">
            <img
              src="/images/rx_online.svg"
              alt="Rx.Online"
              className="auth-logo"
            />
          </Link>
          <h1 className="auth-heading">
            {props.type === 'login' ? 'Welcome Back!' : 'Join Now'}
          </h1>
          {props.children}
          {props.type === 'signup' ? (
            <p className="auth-links">
              Already a member? <Link to="/login">Login</Link>
            </p>
          ) : (
            <p className="auth-links">
              New to Rx.Online? <Link to="/signup">Signup</Link>
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
