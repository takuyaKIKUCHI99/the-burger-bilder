import React from 'react';
import PropTypes from 'prop-types';

import styles from './BuildControls.module.css';

import { CONTROLS } from '../../../constants';

import BuildControl from './BuildControl/BuildControl';

const BuildControls = ({
  addIngredientHandler,
  removeIngredientHandler,
  disabledIngredients,
  totalPrice,
  orderAvailable,
  showModalHandler
}) => {
  const controls = () =>
    CONTROLS.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        addIngredientHandler={() => addIngredientHandler(control.type)}
        removeIngredientHandler={() =>
          removeIngredientHandler(control.type)
        }
        disabled={disabledIngredients[control.type]}
      />
    ));

  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>${totalPrice.toFixed(2)}</strong>
      </p>
      {controls()}
      <button
        className={styles.OrderButton}
        disabled={!orderAvailable}
        onClick={showModalHandler}>
        ORDER NOW!!
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  addIngredientHandler: PropTypes.func.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
  disabledIngredients: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  orderAvailable: PropTypes.bool.isRequired,
  showModalHandler: PropTypes.func.isRequired
};

export default BuildControls;
