import React from 'react';

import ls from 'local-storage';
import { Redirect, Route } from 'react-router-dom';

const AuthedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => {
        if (ls.get('token')) {
          return <Redirect to="/dashboard" />;
        }
        return <Component />;
      }}
    />
  );
};

export default AuthedRoute;
