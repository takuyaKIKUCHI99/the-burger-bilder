import React, { Component } from 'react';

// Constants
import { PRICES } from '../../constants';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4.0,
    modalShow: false
  };

  // If no ingredients added, order not available
  orderAvailable = () => {
    const numOfIngredients = Object.values(this.state.ingredients).reduce(
      (acc, cur) => acc + cur
    );
    return numOfIngredients > 0;
  };

  addIngredientHandler = (ingredient) => {
    this.setState(({ ingredients, totalPrice }) => {
      const updatedIngredients = { ...ingredients };

      updatedIngredients[ingredient] += 1;
      const updatedPrice = totalPrice + PRICES[ingredient];

      return { ingredients: updatedIngredients, totalPrice: updatedPrice };
    });
  };

  removeIngredientHandler = (ingredient) => {
    if (this.state.ingredients[ingredient] < 1) return;

    this.setState(({ ingredients, totalPrice }) => {
      const updatedIngredients = { ...ingredients };

      updatedIngredients[ingredient] -= 1;
      const updatedPrice = totalPrice - PRICES[ingredient];

      return { ingredients: updatedIngredients, totalPrice: updatedPrice };
    });
  };

  showModalHandler = () => this.setState({ modalShow: true });

  closeModalHandler = () => this.setState({ modalShow: false });

  orderContinue = () => alert("Continued!");

  render() {
    const disabledIngredients = () => {
      const disables = {};

      for (const [key, value] of Object.entries(this.state.ingredients)) {
        const [ingredient, count] = [key, value];
        disables[ingredient] = count < 1;
      }

      return disables;
    };

    return (
      <Aux>
        <Modal
          modalShow={this.state.modalShow}
          closeModalHandler={this.closeModalHandler}>
          <OrderSummary
            ingredientsOrder={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            closeModalHandler={this.closeModalHandler}
            orderContinue={this.orderContinue}
          />
        </Modal>
        <Burger ingredientsOrder={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabledIngredients={disabledIngredients()}
          totalPrice={this.state.totalPrice}
          orderAvailable={this.orderAvailable()}
          showModalHandler={this.showModalHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
