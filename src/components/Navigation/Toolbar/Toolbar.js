import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItem from './NavigationItems/NavigationItems';

import styles from './Toolbar.module.css';

const OrderSummary = (props) => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItem />
    </nav>
  </header>
);

export default OrderSummary;
