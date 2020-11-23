import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = ({
  ingredientsOrder,
  totalPrice,
  closeModalHandler,
  orderContinue
}) => {
  const capitalizeText = { textTransform: 'capitalize' };

  const ingredients = () => {
    const liElements = [];

    for (const [key, value] of Object.entries(ingredientsOrder)) {
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
      <p>
        <strong>Total price: {totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType='Danger' clicked={closeModalHandler}>
        Cancel
      </Button>
      <Button buttonType='Success' clicked={orderContinue}>
        Continue
      </Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredientsOrder: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  orderContinue: PropTypes.func.isRequired
};

export default OrderSummary;
