import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const CONTROLS = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => {
  const controls = () =>
    CONTROLS.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        addIngredientHandler={() => props.addIngredientHandler(control.type)}
        removeIngredientHandler={() => props.removeIngredientHandler(control.type)}
        disabled={props.disabledIngredients[(control.type)]}
      />
    ));

  return (
    <div className={styles.BuildControls}>
      <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
      {controls()}
    </div>
  );
};

export default BuildControls;
