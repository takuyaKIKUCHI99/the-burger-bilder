import React, { useState } from 'react';

import axios from '../../axios-orders';

import { BURGER_BASE, PRICES } from '../../utils/constants';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

const BurgerBuilder = () => {
  // ------------ States --------------
  const [ingredients, setIngredients] = useState(BURGER_BASE);
  const [totalPrice, setTotalPrice] = useState(4.0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ----------- Handlers ------------
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

  const orderHandler = () => {
    setIsLoading(true);

    axios
      .post('/orders.json', {
        ingredients,
        price: totalPrice
      })
      .then((response) => {
        setIsLoading(false);
        setIsModalOpen(false);
        setIngredients(BURGER_BASE); // Reset burger order
      })
      .catch((error) => {
        setIsLoading(false);
        setIsModalOpen(false);
        alert(error);
      });
  };

  // --------- JSX ------------
  const orderSummaryModal = () => (
    <Modal
      isModalOpen={isModalOpen}
      backdrop={
        <Backdrop isOpen={isModalOpen} closeHandler={closeModalHandler} />
      }
      orderSummary={
        isLoading ? (
          <Spinner />
        ) : (
          <OrderSummary order={ingredients} totalPrice={totalPrice}>
            <Button buttonType='Danger' clicked={closeModalHandler}>
              Cancel
            </Button>
            <Button buttonType='Success' clicked={orderHandler}>
              Continue
            </Button>
          </OrderSummary>
        )
      }
    />
  );

  return (
    <>
      {orderSummaryModal()}
      <Burger ingredientsOrder={ingredients} />
      <BuildControls
        addIngredientHandler={addIngredientHandler}
        removeIngredientHandler={removeIngredientHandler}
        totalPrice={totalPrice}
        ingredients={ingredients}
        showModalHandler={showModalHandler}
      />
    </>
  );
};

export default BurgerBuilder;
