import React from 'react';
import PropTypes from 'prop-types';

import styles from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const BuildControls = ({
  addIngredientHandler,
  removeIngredientHandler,
  totalPrice,
  ingredients,
  showModalHandler
}) => {
  // When there is no ingredients, "Order" button is disabled
  const numOfIngredients = () =>
    Object.values(ingredients).reduce((acc, cur) => acc + cur);

  const controls = () =>
    Object.keys(ingredients).map((ingredient) => {
      const capitalizeFirstLetter = (letters) =>
        letters.charAt(0).toUpperCase() + letters.slice(1);

      return (
        <BuildControl
          key={capitalizeFirstLetter(ingredient)}
          label={capitalizeFirstLetter(ingredient)}
          addIngredientHandler={() => addIngredientHandler(ingredient)}
          removeIngredientHandler={() => removeIngredientHandler(ingredient)}
          disabled={ingredients[ingredient] < 1}
        />
      );
    });

  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>${totalPrice.toFixed(2)}</strong>
      </p>
      {controls()}
      <button
        className={styles.OrderButton}
        disabled={!numOfIngredients() > 0}
        onClick={showModalHandler}>
        ORDER NOW!!
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  addIngredientHandler: PropTypes.func.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  ingredients: PropTypes.object.isRequired,
  showModalHandler: PropTypes.func.isRequired
};

export default BuildControls;
