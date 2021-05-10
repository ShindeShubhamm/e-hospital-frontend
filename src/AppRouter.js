import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Dashboard, {
  dashboardMenu,
  doctorMenu,
} from './components/Dashboard/Dashboard';
import DoctorAdd from './components/Doctors/Add';
import Landing from './components/Landing/Landing';
import AppLayout from './components/Layout/AppLayout';
import Providers from './components/Providers/Providers';
import AuthedRoute from './router/AuthedRoute';
import Route from './router/Route';
import UnauthedRoute from './router/UnauthedRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Landing}
          layoutProps={{
            headerProps: { navbarColor: '#ffffff88' },
            contentStyles: { paddingTop: 0 },
          }}
        />
        <AuthedRoute
          exact
          path="/dashboard"
          component={Dashboard}
          layout={AppLayout}
          layoutProps={{ menu: dashboardMenu, doctorMenu }}
        />
        <AuthedRoute exact path="/doctor/add" component={DoctorAdd} />
        <AuthedRoute exact path="/providers" component={Providers} />
        <UnauthedRoute
          exact
          path="/login"
          component={Login}
          layoutProps={{ noFooter: true, contentStyles: { paddingBottom: 0 } }}
        />
        <UnauthedRoute
          exact
          path="/signup"
          component={Signup}
          layoutProps={{ noFooter: true, contentStyles: { paddingBottom: 0 } }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
