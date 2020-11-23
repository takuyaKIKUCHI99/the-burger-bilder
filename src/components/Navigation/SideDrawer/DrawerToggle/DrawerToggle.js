import React from 'react';

import styles from './DrawerToggle.module.css';

const DrawerToggle = ({ openHandler }) => (
  <div className={styles.DrawerToggle} onClick={openHandler}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
