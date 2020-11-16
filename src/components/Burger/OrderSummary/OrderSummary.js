import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const capitalizeText = { textTransform: 'capitalize' };

  const ingredients = () => {
    const liElements = [];

    for (const [key, value] of Object.entries(props.ingredientsOrder)) {
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
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredients()}</ul>
      <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button buttonType="Danger" clicked={props.closeModalHandler}>Cancel</Button>
      <Button buttonType="Success" clicked={props.orderContinue}>Continue</Button>
    </Aux>
  );
};

export default OrderSummary;
