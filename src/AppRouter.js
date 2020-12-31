import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthedRoute from './AuthedRoute';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import Layout from './components/Layout/Layout';
import Registration from './components/Registration/Registration';
import UnauthedRoute from './UnauthedRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <UnauthedRoute exact path="/login" component={Login} />
        <UnauthedRoute exact path="/signup" component={Signup} />

        {/* Routes Inside Default Layout */}
        <Layout headerProps={{ navbarColor: '#f5f7f9' }}>
          <Route exact path="/" component={Landing} />
          <AuthedRoute exact path="/dashboard" component={Dashboard} />
          <AuthedRoute exact path="/doctor/add" component={Registration} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
