import React from 'react';
import PropTypes from 'prop-types';

import styles from './BuildControl.module.css';

const BuildControl = ({
  label,
  removeIngredientHandler,
  disabled,
  addIngredientHandler
}) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{label}</div>
      <button
        className={styles.Less}
        onClick={removeIngredientHandler}
        disabled={disabled}>
        Less
      </button>
      <button className={styles.More} onClick={addIngredientHandler}>
        More
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  addIngredientHandler: PropTypes.func.isRequired
};

export default BuildControl;
