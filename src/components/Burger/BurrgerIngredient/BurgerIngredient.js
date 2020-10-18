import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.module.css';

const INGREDIENTS = {
  'bread-bottom': 'BreadBottom',
  'bread-top': 'BreadTop',
  meat: 'Meat',
  cheese: 'Cheese',
  salad: 'Salad',
  bacon: 'Bacon'
};

const BurgerIngredient = (props) => {
  const ingredientStyle = INGREDIENTS[props.type];
  console.log(ingredientStyle);
  if (ingredientStyle === 'BreadTop') {
    return (
      <div className={styles[ingredientStyle]}>
        <div className={styles.Seeds1}></div>
        <div className={styles.Seeds2}></div>
      </div>
    );
  }

  return <div className={styles[ingredientStyle]}></div>;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
