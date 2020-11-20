import React from 'react';

import styles from './Backdrop.module.css';

const Backdrop = ({show, closeHandler}) =>
  show ? (
    <div className={styles.Backdrop} onClick={closeHandler} />
  ) : null;

export default Backdrop;
