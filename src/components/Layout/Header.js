import React, { useEffect, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: (props) => props.color,
  },
});

const Header = (props) => {
  const { navLinks, handleDrawer, auth, onLogout, navbarColor } = props;
  const classes = useStyles({ color: navbarColor });
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 60) {
        setHeaderClass('scrolled');
      } else {
        setHeaderClass('');
      }
    });
  }, []);

  return (
    <div className="header">
      <AppBar className={`${classes.appBar} ${headerClass}`}>
        <Container>
          <Toolbar>
            <div className="h-contents">
              <div className="h-left-contents">
                <button type="button" className="h-menu-button" onClick={() => handleDrawer(true)}>
                  <MdMenu className="h-menu-icon" />
                </button>
                <Link to="/" className="h-logo-container">
                  <img src="/images/rx_online.svg" alt="Rx.Online" className="h-logo" />
                </Link>
              </div>
              <div className="h-right-contents">
                <div className="h-links-container">
                  {navLinks.map((link) => (
                    <NavLink
                      exact
                      to={link.route}
                      key={link.route}
                      className="h-link"
                      activeClassName="h-link-active"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                  {auth?.isAuthenticated && (
                    <button type="button" onClick={onLogout}>
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

Header.defaultProps = {
  navbarColor: '#fff',
};

export default Header;
