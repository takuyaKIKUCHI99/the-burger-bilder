import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = ({ children, order, totalPrice }) => {
  const capitalizeText = { textTransform: 'capitalize' };

  const orderDetails = () => {
    const liElements = [];

    for (const [key, value] of Object.entries(order)) {
      const [ingredient, count] = [key, value];
      liElements.push(
        <li key={ingredient}>
          <span style={capitalizeText}> {ingredient}</span>: {count}
        </li>
      );
    }

    return liElements;
  };

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{orderDetails()}</ul>
      <p>
        <strong>Total price: {totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      {children}
    </>
  );
};

OrderSummary.propTypes = {
  children: PropTypes.node.isRequired,
  order: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default OrderSummary;
