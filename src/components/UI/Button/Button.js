import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ buttonType, clicked, children }) => (
  <button
    className={[styles.Button, styles[buttonType]].join(' ')}
    onClick={clicked}>
    {children}
  </button>
);

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func.isRequired
};

export default Button;
