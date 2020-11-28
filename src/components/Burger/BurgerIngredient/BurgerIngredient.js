import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.module.css';

import { INGREDIENTS } from '../../../utils/constants';

const BurgerIngredient = ({ type }) => {
  const ingredientStyle = INGREDIENTS[type];

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
