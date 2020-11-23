import React from 'react';
import PropTypes from 'prop-types';

import styles from './Backdrop.module.css';

const Backdrop = ({ show, closeHandler }) =>
  show ? <div className={styles.Backdrop} onClick={closeHandler} /> : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired
};

export default Backdrop;
