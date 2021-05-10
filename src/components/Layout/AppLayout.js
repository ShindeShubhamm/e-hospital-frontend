import React, { useState } from 'react';

import { connect } from 'react-redux';

import { authLogout } from '../../lib/redux/actions/authActions';
import { selectMenuItem } from '../../lib/redux/actions/dashboardActions';
import Header from './sections/Header';
import Sidebar from './sections/Sidebar';

const appLayoutNavLinks = [
  { name: 'For Providers', route: '/providers' },
  { name: 'Dashboard', route: '/dashboard' },
];

const appLayoutProviderLinks = [{ name: 'Dashboard', route: '/dashboard' }];

const AppLayout = (props) => {
  const {
    auth,
    onLogout,
    children,
    menu,
    doctorMenu,
    onMenuItemSelect,
    dashboard,
  } = props;
  const navLinks = !auth?.userInfo?.isProvider
    ? appLayoutNavLinks
    : appLayoutProviderLinks;

  const mapMenu = !auth?.userInfo?.isProvider ? menu : doctorMenu;

  const [drawer, setDrawer] = useState(false);

  const handleDrawer = (state) => {
    setDrawer(state);
  };

  const handleMenuItemSelection = (menu) => {
    onMenuItemSelect(menu);
  };

  return (
    <div className="app-layout">
      <Header
        auth={auth}
        onLogout={onLogout}
        navLinks={navLinks}
        handleDrawer={handleDrawer}
        appClass="app-header"
      />
      <div className="app-screen">
        <div className="app-menu-wrapper">
          <div className="app-menu-main">
            {mapMenu.map((item, index) => {
              const { icon, iconSelected, text } = item;
              const isSelected = dashboard.selectedMenu === index;
              const Icon = isSelected ? iconSelected : icon;

              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleMenuItemSelection(index)}
                  style={{ display: 'contents' }}
                >
                  <div
                    className={`menu-option ${
                      isSelected ? 'menu-selected' : ''
                    }`}
                  >
                    <Icon className="option-icon" />
                    <h2 className="option-text">{text}</h2>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="app-children">{children}</div>
      </div>
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
    dashboard: state.dashboard,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authLogout()),
    onMenuItemSelect: (menu) => dispatch(selectMenuItem(menu)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
