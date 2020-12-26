import styles from './Input.module.css';

import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputType, type, name, placeholder }) => {
  const dynamicInputEl = () => {
    const options = {
      type,
      name,
      placeholder,
    }
    switch (inputType) {
      case 'texarea':
        return <textarea className={styles.InputElement} {...options}></textarea>;
      case 'input':
        return <input className={styles.InputElement} {...options}></input>;
      default:
        console.log('No type provided')
    }
  };

  return (
    <>
      {dynamicInputEl()}
    </>
  );
};

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  placeholder: null,
}

export default Input;
