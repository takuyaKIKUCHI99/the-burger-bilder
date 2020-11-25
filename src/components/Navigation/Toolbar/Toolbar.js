import React from 'react';
import Proptypes from 'prop-types';

import styles from './Toolbar.module.css';

const Toolbar = ({ children }) => (
  <header className={styles.Toolbar}>
    {children}
  </header>
);

Toolbar.propTypes = {
  children: Proptypes.node.isRequired
};

export default Toolbar;
