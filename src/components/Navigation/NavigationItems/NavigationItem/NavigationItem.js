import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavigationItem.module.css';

const NavigationItem = ({ link, active, children }) => (
  <li className={styles.NavigationItem}>
    <a href={link} className={active ? styles.active : null}>
      {children}
    </a>
  </li>
);

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};

NavigationItem.defaultProps = {
  active: false
};

export default NavigationItem;
