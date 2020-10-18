import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const PRICES = {
  meat: 1.3,
  cheese: 0.4,
  salad: 0.5,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0
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
    // do something
  };

  render() {
    return (
      <Aux>
        <Burger ingredientsOrder={this.state.ingredients} />
        <BuildControls addIngredientHandler={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
