import React from 'react';
import Proptypes from 'prop-types';

import styles from './DrawerToggle.module.css';

const DrawerToggle = ({ openHandler }) => (
  <div className={styles.DrawerToggle} onClick={openHandler}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

DrawerToggle.propTypes = {
  openHandler: Proptypes.func.isRequired
};

export default DrawerToggle;
