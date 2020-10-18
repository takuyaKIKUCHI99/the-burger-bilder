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
    totalPrice: 4.00
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

  render() {
    const disabledIngredients = () => {
      const disables = {};

      for (const [key, value] of Object.entries(this.state.ingredients)) {
        const [ingredient, count] = [key, value];
        disables[ingredient] = (count < 1);
      }

      return disables;
    };


    return (
      <Aux>
        <Burger ingredientsOrder={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabledIngredients={disabledIngredients()}
          totalPrice={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
