import React from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './SideDrawer.module.css';

const SideDrawer = (props) => {
  const isOpen = props.isOpen ? styles.Open : styles.Close;
  const attachedStyles = [styles.SideDrawer, isOpen]

  return (
    <Aux>
      <Backdrop
        show={props.isOpen}
        closeHandler={props.closeHandler}
      />
      <div className={attachedStyles.join(' ')}>
        <Logo height="11%"/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
};

export default SideDrawer;
