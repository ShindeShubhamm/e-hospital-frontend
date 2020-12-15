import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthedRoute from './AuthedRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import UnauthedRoute from './UnauthedRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>

        {/* Routes Inside Default Layout */}
        <Layout>
          <Route exact path="/" />
          <AuthedRoute exact path="/dashboard" component={Dashboard} />
          <UnauthedRoute exact path="/login" component={Login} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
