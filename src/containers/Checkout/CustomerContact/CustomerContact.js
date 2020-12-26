import styles from './CustomerContact.module.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';

import { CONTACT_INPUTS } from '../../../utils/constants';

const CheckoutCustomerContact = ({ order, totalPrice }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();

    setIsLoading(true);

    axios
      .post('/orders.json', {
        ingredients: order,
        price: totalPrice
      })
      .then(() => {
        setIsLoading(false);
        history.push('/');
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const inputs = (
    CONTACT_INPUTS.map((options) => <Input key={options.name} {...options}></Input>)
  )

  const contactForm = (
    <form className={styles.Contact}>
      <label className={styles.Label}>Enter your Contact Data</label>
      {inputs}
      <Button buttonType='Success' clicked={handleOrder}>
        Order
      </Button>
    </form>
  );

  return (
    isLoading ? <Spinner /> : contactForm
  );
};

CheckoutCustomerContact.propTypes = {
  order: PropTypes.object,
  totalPrice: PropTypes.number.isRequired,
};

export default CheckoutCustomerContact;
