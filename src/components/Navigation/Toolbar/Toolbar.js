import React from 'react';
import Proptypes from 'prop-types';

import styles from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const OrderSummary = ({ openHandler }) => (
  <header className={styles.Toolbar}>
    <DrawerToggle openHandler={openHandler} />
    <Logo height='80%' />
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

OrderSummary.propTypes = {
  openHandler: Proptypes.func.isRequired
};

export default OrderSummary;
