import React from 'react';

import styles from './Modal.module.css';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  const translateStyle = {
    transform: props.modalShow ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.modalShow ? '1' : '0'
  };

  return (
    <Aux>
      <Backdrop
        show={props.modalShow}
        closeHandler={props.closeModalHandler}
      />
      <div className={styles.Modal} style={translateStyle}>
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
