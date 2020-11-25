import React from 'react';
import PropTypes from 'prop-types';

import styles from './Backdrop.module.css';

const Backdrop = ({ isOpen, closeHandler }) =>
  isOpen ? (
    <div className={styles.Backdrop} onClick={closeHandler} />
  ) : null;

Backdrop.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired
};

export default Backdrop;
