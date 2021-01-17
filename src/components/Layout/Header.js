import React, { Fragment, useEffect, useState } from 'react';

import { AppBar, Container, List, ListItem, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

import Dropdown from '../common/Dropdown';

const api = process.env.REACT_APP_API_ENDPOINT;

const useStyles = makeStyles({
  appBar: {
    backgroundColor: (props) => props.color,
  },
});

const Header = (props) => {
  const { navLinks, handleDrawer, auth, onLogout, navbarColor } = props;
  const { isAuthenticated, userInfo } = auth;
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
                <button
                  type="button"
                  className="h-menu-button"
                  onClick={() => handleDrawer(true)}
                >
                  <MdMenu className="h-menu-icon" />
                </button>
                <Link to="/" className="h-logo-container">
                  <img
                    src="/images/rx_online.svg"
                    alt="Rx.Online"
                    className="h-logo"
                  />
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
                </div>
                {isAuthenticated && (
                  <Dropdown
                    className="h-profile"
                    primary={
                      <div className="h-photo">
                        {userInfo?.profilePhoto ? (
                          <img
                            src={`${api}/file/${userInfo.profilePhoto}`}
                            alt={userInfo.firstName}
                            className="h-image"
                          />
                        ) : (
                          <div className="h-image-alt">
                            {userInfo.firstName?.charAt(0)}
                            {userInfo.lastName?.charAt(0)}
                          </div>
                        )}
                      </div>
                    }
                    secondary={
                      // eslint-disable-next-line
                      <Fragment>
                        <List dense>
                          <ListItem onClick={onLogout} button>
                            Logout
                          </ListItem>
                        </List>
                      </Fragment>
                    }
                  />
                )}
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
