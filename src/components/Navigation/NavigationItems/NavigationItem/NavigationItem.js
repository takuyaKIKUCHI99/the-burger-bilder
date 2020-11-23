import React from 'react';
import Proptypes from 'prop-types';

import styles from './NavigationItem.module.css';

const NavigationItem = ({ link, active, children }) => (
  <li className={styles.NavigationItem}>
    <a href={link} className={active ? styles.active : null}>
      {children}
    </a>
  </li>
);

NavigationItem.propTypes = {
  link: Proptypes.string.isRequired,
  active: Proptypes.bool,
  children: Proptypes.node.isRequired
};

NavigationItem.defaultProps = {
  active: false
};

export default NavigationItem;
