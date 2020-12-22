import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthedRoute from './AuthedRoute';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';
import UnauthedRoute from './UnauthedRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <UnauthedRoute exact path="/login" component={Login} />
        <UnauthedRoute exact path="/signup" component={Signup} />

        {/* Routes Inside Default Layout */}
        <Layout>
          <Route exact path="/" />
          <AuthedRoute exact path="/dashboard" component={Dashboard} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
