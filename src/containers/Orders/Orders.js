import React, {useState, useEffect} from 'react';

import axios from '../../axios-orders';

import Order from './Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = () => {
  const [rowOrders, setRowOrders] = useState(null);
  const [orders, setOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch orders
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/orders.json')
      .then((response) => {
        console.log(response); // Todo: remove
        setRowOrders(response.data);
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!rowOrders) return;
    const values = Object.values(rowOrders);
    setOrders(values);
  }, [rowOrders]);

  const orderList = () => {
    if (!orders) return <p>There is no orders yet!</p>;
    return (
      <ul>
        {orders.map((_) => <Order />)}
      </ul>
    );
  };

  return (
    isLoading ? <Spinner /> : orderList()
  )
};

export default Orders;
