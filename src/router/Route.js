import React from 'react';

import { Route as ReactRoute } from 'react-router-dom';

import DefaultLayout from '../components/Layout/Layout';

const Route = (props) => {
  const { layout: Layout, component: Component, layoutProps, ...rest } = props;

  return (
    <ReactRoute
      {...rest}
      render={(matchProps) => (
        <Layout {...layoutProps}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

Route.defaultProps = {
  layout: DefaultLayout,
  layoutProps: {},
};

export default Route;
