import styles from './Checkout.module.css';

import React from 'react';
import { useLocation, useHistory, Route } from "react-router-dom";

import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import CheckoutCustomerContact from './CheckoutCustomerContact/CheckoutCustomerContact';

const Checkout = () => {
  const location = useLocation();
  const history = useHistory();

  const order = location?.state?.ingredients;

  const handleOnClickGoBack = () => {
    history.goBack();
  };

  const handleOnClickContinue = () => {
    history.push('/checkout/customer-contact');
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
      <Route path="/checkout/customer-contact" component={CheckoutCustomerContact} />
    </div>
  )
};

export default Checkout;
