import React from 'react';

import styles from './Backdrop.module.css';

const Backdrop = (props) =>
  props.modalShow ? (
    <div className={styles.Backdrop} onClick={props.closeModalHandler} />
  ) : null;

export default Backdrop;
