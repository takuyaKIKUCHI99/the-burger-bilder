import { checkPropTypes } from 'prop-types';
import React from 'react';
import Proptypes from 'prop-types';

import styles from './Logo.module.css';

import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = ({ height }) => (
  <div className={styles.Logo} style={{ height: height }}>
    <img src={burgerLogo} alt='Burger logo' />
  </div>
);

Logo.propTypes = {
  height: Proptypes.string.isRequired
};

export default Logo;
