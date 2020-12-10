import styles from './Checkout.module.css';

import React from 'react';
import { useLocation } from "react-router-dom";

import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';

const Checkout = () => {
  const location = useLocation();

  const handleOnClickGoBack = () => {
    // Do something
  };

  const handleOnClickContinue = () => {
    // Do something
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
      <Burger ingredientsOrder={location.state.ingredients} />
      {buttons}
    </div>
  )
};

export default Checkout;
