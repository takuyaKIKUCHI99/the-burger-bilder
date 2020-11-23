import React, { useState } from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import styles from './Layout.module.css';

const Layout = (props) => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const openHandler = () => setIsSideDrawerOpen(true);
  const closeHandler = () => setIsSideDrawerOpen(false);

  return (
    <Aux>
      <Toolbar openHandler={openHandler}/>
      <SideDrawer
        isOpen={isSideDrawerOpen}
        closeHandler={closeHandler}
      />
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
