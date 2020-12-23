import React, { useState } from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
  const { auth } = props;
  const navLinks = auth.isAuthenticated ? authedNavLinks : unauthedNavLinks;

  const [drawer, setDrawer] = useState(false);

  const handleDrawer = (state) => {
    setDrawer(state);
  };

  return (
    <div className="layout">
      <Header navLinks={navLinks} handleDrawer={handleDrawer} />
      <div className="l-children">{props.children}</div>
      <Footer />
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

export default connect(mapStateToProps)(Layout);
