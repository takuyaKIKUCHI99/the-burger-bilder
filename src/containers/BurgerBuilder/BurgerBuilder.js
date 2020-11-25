import React, { useState } from 'react';

import axios from '../../axios-orders';

import { PRICES } from '../../constants';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Button from '../../components/UI/Button/Button';

const BurgerBuilder = () => {
  // State
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });
  const [totalPrice, setTotalPrice] = useState(4.0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * @param {string} ingredient
   */
  const addIngredientHandler = (ingredient) => {
    // Increment count
    const updatedIngredients = { ...ingredients };
    updatedIngredients[ingredient] += 1;
    setIngredients(updatedIngredients);
    // Add price
    const updatedPrice = totalPrice + PRICES[ingredient];
    setTotalPrice(updatedPrice);
  };

  /**
   * @param {string} ingredient
   */
  const removeIngredientHandler = (ingredient) => {
    // Prevent to go negative
    if (ingredients[ingredient] < 1) return;

    // Decrement count
    const updatedIngredients = { ...ingredients };
    updatedIngredients[ingredient] -= 1;
    setIngredients(updatedIngredients);
    // Add price
    const updatedPrice = totalPrice - PRICES[ingredient];
    setTotalPrice(updatedPrice);
  };

  const showModalHandler = () => setIsModalOpen(true);
  const closeModalHandler = () => setIsModalOpen(false);

  const orderContinue = () => {
    axios
      .post('/orders.json', {
        ingredients,
        price: totalPrice
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // JSX
  const orderSummaryModal = () => (
    <Modal
      isModalOpen={isModalOpen}
      backdrop={
        <Backdrop
          isOpen={isModalOpen}
          closeHandler={closeModalHandler}
        />
      }
      orderSummary={
        <OrderSummary order={ingredients} totalPrice={totalPrice}>
          <Button buttonType='Danger' clicked={closeModalHandler}>
            Cancel
          </Button>
          <Button buttonType='Success' clicked={orderContinue}>
            Continue
          </Button>
        </OrderSummary>
      }
    />
  );

  return (
    <Aux>
      {orderSummaryModal()}
      <Burger ingredientsOrder={ingredients} />
      <BuildControls
        addIngredientHandler={addIngredientHandler}
        removeIngredientHandler={removeIngredientHandler}
        totalPrice={totalPrice}
        ingredients={ingredients}
        showModalHandler={showModalHandler}
      />
    </Aux>
  );
};

export default BurgerBuilder;
