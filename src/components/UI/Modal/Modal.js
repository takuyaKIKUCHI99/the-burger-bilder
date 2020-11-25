import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

import Aux from '../../../hoc/Aux';

const Modal = ({ isModalOpen, backdrop, orderSummary }) => {
  const translateStyle = {
    transform: isModalOpen ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: isModalOpen ? '1' : '0'
  };

  return (
    <Aux>
      {backdrop}
      <div className={styles.Modal} style={translateStyle}>
        {orderSummary}
      </div>
    </Aux>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  backdrop: PropTypes.node.isRequired,
  orderSummary: PropTypes.node.isRequired,
};

export default Modal;
