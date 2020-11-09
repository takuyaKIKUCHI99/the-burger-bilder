import React from 'react';

import styles from './Modal.module.css';

const Modal = (props) => {
  const translateStyle = {
    transform: props.modalShow ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.modalShow ? '1' : '0'
  }

  return (
    <div
      className={styles.Modal}
      style={translateStyle}
    >
      {props.children}
    </div>
  );
};

export default Modal;