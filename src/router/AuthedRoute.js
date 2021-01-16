import React from 'react';

import ls from 'local-storage';
import { Redirect, Route } from 'react-router-dom';

import DefaultLayout from '../components/Layout/Layout';

const AuthedRoute = (props) => {
  const { layout: Layout, component: Component, layoutProps, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => {
        if (!ls.get('token')) {
          return <Redirect to="/login" />;
        }
        return (
          <Layout {...layoutProps}>
            <Component {...matchProps} />
          </Layout>
        );
      }}
    />
  );
};

AuthedRoute.defaultProps = {
  layout: DefaultLayout,
  layoutProps: {},
};

export default AuthedRoute;
