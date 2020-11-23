import React from 'react';
import PropTypes from 'prop-types';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredientsOrder }) => {
  const orders = { ...ingredientsOrder }; // [{ingredient: count}]

  const ingredients = () => {
    const burgerIngredientComponents = [];

    // Build 'BurgerIngredient' component as per the passed order
    for (const [key, value] of Object.entries(orders)) {
      const [ingredient, count] = [key, value];

      [...Array(count)].forEach((_, index) =>
        burgerIngredientComponents.push(
          <BurgerIngredient type={ingredient} key={`${ingredient}-${index}`} />
        )
      );
    }

    const noIngredientMessage = <p>Please add some ingredients!</p>;

    return burgerIngredientComponents.length
      ? burgerIngredientComponents
      : noIngredientMessage;
  };
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {ingredients()}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

Burger.propTypes = {
  ingredientsOrder: PropTypes.object.isRequired
};

export default Burger;
