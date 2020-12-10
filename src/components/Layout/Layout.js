import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="l-children">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
