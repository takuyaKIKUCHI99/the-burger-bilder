import styles from './Checkout.module.css';

import React from 'react';
import { useLocation, useHistory, Route } from 'react-router-dom';

import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import CheckoutCustomerContact from './CheckoutCustomerContact/CheckoutCustomerContact';

const Checkout = () => {
  const location = useLocation();
  const history = useHistory();

  const order = location?.state?.ingredients;
  const { totalPrice } = location?.state;

  const handleOnClickGoBack = () => {
    history.goBack();
  };

  const handleOnClickContinue = () => {
    history.push('/checkout/customer-contact', {
      ingredients: order,
      totalPrice: totalPrice
    });
  };

  const buttons = (
    <div className={styles.CheckoutButtons}>
      <Button buttonType='Danger' clicked={handleOnClickGoBack}>
        Cancel
      </Button>
      <Button buttonType='Success' clicked={handleOnClickContinue}>
        Continue
      </Button>
    </div>
  );

  return (
    <div className={styles.Checkout}>
      <h1>We hope you enjoy our burger!!</h1>
      <Burger ingredientsOrder={order} />
      {buttons}
      <Route
        path='/checkout/customer-contact'
        render={() => (
          <CheckoutCustomerContact order={order} totalPrice={totalPrice} />
        )}
      />
    </div>
  );
};

export default Checkout;
