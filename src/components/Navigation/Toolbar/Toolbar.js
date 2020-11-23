import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import styles from './Toolbar.module.css';

const OrderSummary = ({ openHandler }) => (
  <header className={styles.Toolbar}>
    <DrawerToggle openHandler={openHandler} />
    <Logo height='80%' />
    <nav className={styles.DesktopOnly}>
      <NavigationItem />
    </nav>
  </header>
);

export default OrderSummary;
