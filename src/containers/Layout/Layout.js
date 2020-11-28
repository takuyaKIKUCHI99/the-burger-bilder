import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import DrawerToggle from '../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const Layout = ({ children }) => {
  // State
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  // Action handler
  const openSideDrawerHandler = () => setIsSideDrawerOpen(true);
  const closeSideDrawerHandler = () => setIsSideDrawerOpen(false);

  return (
    <>
      <Toolbar>
        <DrawerToggle openHandler={openSideDrawerHandler} />
      </Toolbar>
      <SideDrawer isOpen={isSideDrawerOpen}>
        <Backdrop isOpen={isSideDrawerOpen} closeHandler={closeSideDrawerHandler} />
      </SideDrawer>
      <main className={styles.Content}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
