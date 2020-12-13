import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import axios from '../../axios-orders';

import { BASE_PRICE, PRICES } from '../../utils/constants';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

const BurgerBuilder = () => {
  const history = useHistory();
  const burgerBaseRef = useRef(null);
  // ------------ States --------------
  const [ingredients, setIngredients] = useState(null);
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // ----------- Effects --------------
  // Error handling
  useEffect(() => {
    const errorInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        setErrorMessage(error.message);
        setIsModalOpen(true);
        return Promise.reject(error);
      }
    );
    axios.interceptors.request.eject(errorInterceptor);
  }, []);

  // Fetch base-burger
  useEffect(() => {
    axios
      .get('/burger-base.json')
      .then((response) => {
        setIngredients(response.data);
        burgerBaseRef.current = response.data;
      })
      .catch(() => setIsLoading(false));
  }, []);

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
  const closeModalHandler = () => {
    setIsModalOpen(false);
    setErrorMessage(null);
  };

  const orderHandler = () => {
    history.push('/checkout', {
      ingredients: ingredients,
      totalPrice: totalPrice
    });
  };

  // --------- JSX ------------
  const orderSummaryModal = (
    <Modal isModalOpen={isModalOpen} closeModalHandler={closeModalHandler}>
      {isLoading ? (
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
      )}
    </Modal>
  );

  const errorModal = (
    <Modal isModalOpen={isModalOpen} closeModalHandler={closeModalHandler}>
      {errorMessage}
    </Modal>
  );

  return (
    <>
      {ingredients ? (
        <>
          {errorMessage ? errorModal : orderSummaryModal}
          <Burger ingredientsOrder={ingredients} />
          <BuildControls
            addIngredientHandler={addIngredientHandler}
            removeIngredientHandler={removeIngredientHandler}
            totalPrice={totalPrice}
            ingredients={ingredients}
            showModalHandler={showModalHandler}
          />
        </>
      ) : (
        <>
          {errorMessage ? (
            errorModal
          ) : (
            <p>There is something wrong! Please come back later!</p>
          )}
        </>
      )}
    </>
  );
};

export default BurgerBuilder;
