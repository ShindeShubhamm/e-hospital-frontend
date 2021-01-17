import React, { useState } from 'react';

import { SwipeableDrawer } from '@material-ui/core';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authLogout } from '../../lib/redux/actions/authActions';
import Footer from './Footer';
import Header from './Header';

const unauthedNavLinks = [
  { name: 'Home', route: '/' },
  { name: 'Login', route: '/login' },
  { name: 'Signup', route: '/signup' },
];

const authedNavLinks = [
  { name: 'Home', route: '/' },
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
      <SwipeableDrawer
        open={drawer}
        onOpen={() => handleDrawer(true)}
        onClose={() => handleDrawer(false)}
        className="l-sidebar"
      >
        <div className="l-side-links">
          {navLinks.map((link) => (
            <NavLink
              exact
              to={link.route}
              key={link.route}
              onClick={() => handleDrawer(false)}
              className="l-sidelink"
              activeClassName="l-sidelink-active"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </SwipeableDrawer>
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
