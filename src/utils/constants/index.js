const BASE_PRICE = 4.0;

const CONTACT_INPUTS = [
  {
    inputType: 'input',
    type: 'text',
    name: 'name',
    placeholder: 'Your Name',
  },
  {
    inputType: 'input',
    type: 'text',
    name: 'email',
    placeholder: 'Your Email',
  },
  {
    inputType: 'input',
    type: 'text',
    name: 'address',
    placeholder: 'Your Address',
  },
  {
    inputType: 'input',
    type: 'text',
    name: 'phone',
    placeholder: 'Your Phone no.',
  },
];

const INGREDIENTS = {
  'bread-bottom': 'BreadBottom',
  'bread-top': 'BreadTop',
  meat: 'Meat',
  cheese: 'Cheese',
  salad: 'Salad',
  bacon: 'Bacon'
};

const PRICES = {
  meat: 1.3,
  cheese: 0.4,
  salad: 0.5,
  bacon: 0.7
};

export {
  BASE_PRICE,
  CONTACT_INPUTS,
  INGREDIENTS,
  PRICES
};
