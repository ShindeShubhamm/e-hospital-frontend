import React, { useState } from 'react';

import { connect } from 'react-redux';

import { authLogout } from '../../lib/redux/actions/authActions';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Sidebar from './sections/Sidebar';

const unauthedNavLinks = [
  { name: 'Login', route: '/login' },
  { name: 'Signup', route: '/signup' },
];

const authedNavLinks = [
  { name: 'For Providers', route: '/providers' },
  { name: 'Dashboard', route: '/dashboard' },
];

const Layout = (props) => {
  const { auth, onLogout, headerProps, contentStyles, noFooter } = props;
  const navLinks = auth.isAuthenticated ? authedNavLinks : unauthedNavLinks;

  const [drawer, setDrawer] = useState(false);

  const handleDrawer = (state) => {
    setDrawer(state);
  };

  return (
    <div className="layout">
      <Header
        auth={auth}
        onLogout={onLogout}
        navLinks={navLinks}
        handleDrawer={handleDrawer}
        {...headerProps}
      />
      <div className="l-children" style={contentStyles}>
        {props.children}
      </div>
      {!noFooter && <Footer />}
      <Sidebar
        open={drawer}
        onOpen={() => handleDrawer(true)}
        onClose={() => handleDrawer(false)}
        navLinks={navLinks}
        onLinkClick={() => handleDrawer(false)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authLogout()),
  };
};

Layout.defaultProps = {
  navbarColor: '#fff',
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
