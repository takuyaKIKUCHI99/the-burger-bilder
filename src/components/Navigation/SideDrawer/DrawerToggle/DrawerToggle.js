import React from 'react';
import PropTypes from 'prop-types';

import styles from './DrawerToggle.module.css';

const DrawerToggle = ({ openHandler }) => (
  <div className={styles.DrawerToggle} onClick={openHandler}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

DrawerToggle.propTypes = {
  openHandler: PropTypes.func.isRequired
};

export default DrawerToggle;
