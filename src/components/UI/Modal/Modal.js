import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../../../components/UI/Backdrop/Backdrop';

import styles from './Modal.module.css';

const Modal = ({ isModalOpen, children, closeModalHandler }) => {
  const translateStyle = {
    transform: isModalOpen ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: isModalOpen ? '1' : '0'
  };

  return (
    <>
      <Backdrop isOpen={isModalOpen} closeHandler={closeModalHandler} />
      <div className={styles.Modal} style={translateStyle}>
        {children}
      </div>
    </>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
  closeModalHandler: PropTypes.func.isRequired,
};

export default Modal;
