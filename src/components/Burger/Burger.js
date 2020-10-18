import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurrgerIngredient/BurgerIngredient';

const Burger = (props) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
};

export default Burger;