import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css';

const NavigationItem = ({ link, children }) => (
  <li className={styles.NavigationItem}>
    <NavLink to={link} activeClassName={styles.active} exact>
      {children}
    </NavLink>
  </li>
);

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default NavigationItem;
