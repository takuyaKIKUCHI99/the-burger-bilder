import styles from './Order.module.css';

import React from 'react';
import PropTypes from 'prop-types';

const Order = (order) => {
  console.log(order);
  return (
    <div className={styles.Order}>
      <span>Ingredients: </span>
      <span>Price: USD</span>
    </div>
  );
};

Order.propTypes = { order: PropTypes.object.isRequired };

export default Order;
