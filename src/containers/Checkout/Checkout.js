import React from 'react';
import { useLocation } from "react-router-dom";

import Burger from '../../components/Burger/Burger';

const Checkout = () => {
  const location = useLocation();

  return (
    <>
      <h1>We hope you enjoy our burger!!</h1>
      <Burger ingredientsOrder={location.state.ingredients} />
    </>
  )
};

export default Checkout;
