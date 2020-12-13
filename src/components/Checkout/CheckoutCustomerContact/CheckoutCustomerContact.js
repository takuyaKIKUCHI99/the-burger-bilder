import styles from './CheckoutCustomerContact.module.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from '../../../axios-orders';

import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';

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

  const contactForm = (
    <form className={styles.Contact}>
      <h2>Please fill your contact information</h2>
      <input
        type='text'
        name='name'
        className={styles.Input}
        placeholder='Your Name'></input>
      <input
        type='text'
        name='email'
        className={styles.Input}
        placeholder='Your Email'></input>
      <input
        type='text'
        name='address'
        className={styles.Input}
        placeholder='Your Address'></input>
      <input
        type='text'
        name='phone'
        className={styles.Input}
        placeholder='Your Phone no.'></input>
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
