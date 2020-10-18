import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurrgerIngredient/BurgerIngredient';

const Burger = (props) => {
  const ingredientsOrder = props.ingredientsOrder; // [{ingredient: count}]

  const ingredients = () => {
    const burgerIngredientComponents = [];

    // Build 'BurgerIngredient' component as per the passed order
    for (const [key, value] of Object.entries(ingredientsOrder)) {
      const [ingredient, count] = [key, value];

      [...Array(count)].forEach((_, index) =>
        burgerIngredientComponents.push(
          <BurgerIngredient type={ingredient} key={`${ingredient}-${index}`} />
        )
      );
    }

    return burgerIngredientComponents;
  };
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {ingredients()}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
