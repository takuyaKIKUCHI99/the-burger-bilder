import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './SideDrawer.module.css';

const SideDrawer = ({ children, isOpen }) => {
  const isOpenStyle = isOpen ? styles.Open : styles.Close;
  const attachedStyles = [styles.SideDrawer, isOpenStyle];

  return (
    <Aux>
      {children}
      <div className={attachedStyles.join(' ')}>
        <Logo height='11%' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

SideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default SideDrawer;
