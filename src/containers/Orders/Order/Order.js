import styles from './Order.module.css';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Order = ({ order }) => {
  const [ingredients, setIngredients] = useState(null);
  const [quantities, setQuantities] = useState(null);

  useEffect(() => {
    const keys = [];
    const values = [];
    for (const [key, value] of Object.entries(order.ingredients)) {
      keys.push(key);
      values.push(value);
    }
    setIngredients(keys);
    setQuantities(values);
  }, [order]);

  const ingredientsMapping = () => {
    if (!ingredients) return;
    return ingredients.map((ingredient, index) => {
      return (
        <span
          className={
            styles.Ingredients
          }>{`${ingredient}(${quantities[index]})`}</span>
      );
    });
  };

  return (
    <div className={styles.Order}>
      <div className={styles.OrderLine}>Ingredients: {ingredientsMapping()}</div>
      <div>
        <span>Price: USD{order.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

Order.propTypes = { order: PropTypes.object.isRequired };

export default Order;
