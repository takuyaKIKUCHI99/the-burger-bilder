import React, { useState } from 'react';
import Proptypes from 'prop-types';

import styles from './Layout.module.css';

import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Logo from '../../components/Logo/Logo';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const Layout = ({ children }) => {
  // State
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  // Action handler
  const openSideDrawerHandler = () => setIsSideDrawerOpen(true);
  const closeSideDrawerHandler = () => setIsSideDrawerOpen(false);

  return (
    <Aux>
      <Toolbar>
        <DrawerToggle openHandler={openSideDrawerHandler} />
        <Logo height='80%' />
        <nav className={styles.DesktopOnly}>
          <NavigationItems />
        </nav>
      </Toolbar>
      <SideDrawer isOpen={isSideDrawerOpen} closeSideDrawerHandler={closeSideDrawerHandler} />
      <main className={styles.Content}>{children}</main>
    </Aux>
  );
};

Layout.propTypes = {
  children: Proptypes.node.isRequired
};

export default Layout;
