import React, { useState } from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { NavLink } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

const navLinks = [
  { name: 'Login', route: '/login' },
  { name: 'Signup', route: '/signup' },
];

const Layout = (props) => {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = (state) => {
    setDrawer(state);
  };

  return (
    <div className="layout">
      <Header navLinks={navLinks} handleDrawer={handleDrawer} />
      <div className="l-children">
        {props.children}
      </div>
      <Footer />
      <SwipeableDrawer
        open={drawer}
        onOpen={() => handleDrawer(true)}
        onClose={() => handleDrawer(false)}
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
    </div >
  );
};

export default Layout;
