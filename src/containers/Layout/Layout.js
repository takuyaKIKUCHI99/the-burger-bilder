import React, { useState } from 'react';
import Proptypes from 'prop-types';

import styles from './Layout.module.css';

import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = ({ children }) => {
  // State
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  // Action handler
  const openHandler = () => setIsSideDrawerOpen(true);
  const closeHandler = () => setIsSideDrawerOpen(false);

  return (
    <Aux>
      <Toolbar openHandler={openHandler} />
      <SideDrawer isOpen={isSideDrawerOpen} closeHandler={closeHandler} />
      <main className={styles.Content}>{children}</main>
    </Aux>
  );
};

Layout.propTypes = {
  children: Proptypes.node.isRequired
};

export default Layout;
