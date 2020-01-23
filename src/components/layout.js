import PropTypes from 'prop-types';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
