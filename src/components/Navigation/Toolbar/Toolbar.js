import React from 'react';
import PropTypes from 'prop-types';

import styles from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const Toolbar = ({ children }) => (
  <header className={styles.Toolbar}>
    {children}
    <Logo height='80%' />
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

Toolbar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Toolbar;
