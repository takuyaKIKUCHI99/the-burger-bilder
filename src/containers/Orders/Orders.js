import React, {useState, useEffect} from 'react';

import axios from '../../axios-orders';

import Order from './Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [keys, setKeys] = useState(null);
  const [values, setValues] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch orders
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/orders.json')
      .then((response) => {
        setOrders(response.data);
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!orders) return;
    setKeys(Object.keys(orders));
    setValues(Object.values(orders));
  }, [orders]);

  const orderList = () => {
    if (!orders) return <p>There is no orders yet!</p>;
    return (
      <ul>
        {keys.map((key, index) => {
          return <Order key={key} order={values[index]} />;
        })}
      </ul>
    );
  };

  return (
    isLoading ? <Spinner /> : orderList()
  )
};

export default Orders;
