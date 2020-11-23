import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ modalShow, closeModalHandler, children }) => {
  const translateStyle = {
    transform: modalShow ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: modalShow ? '1' : '0'
  };

  return (
    <Aux>
      <Backdrop show={modalShow} closeHandler={closeModalHandler} />
      <div className={styles.Modal} style={translateStyle}>
        {children}
      </div>
    </Aux>
  );
};

Modal.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
