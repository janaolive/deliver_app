import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Card, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';
import api from '../../services/Api';

export default function SellerOrders() {
  const [order, setOrder] = useState([]);
  const redirect = useNavigate();

  const handleFetch = async () => {
    try {
      const orders = await api.get('/seller/orders');
      setOrder(orders.data);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleClick = async (target) => {
    try {
      const { id } = target;
      const orderDetails = await api.get(`/seller/orders/${id}`);
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
      redirect(`${id}`);
    } catch (error) {
      return error;
    }
  };

  const makeProducts = (product, index) => {
    const { status, id, totalPrice, deliveryAddress, deliveryNumber, saleDate } = product;
    console.log(product);
    return (
      <div key={ index }>
        <div>
          <button
            id={ id }
            type="button"
            onClick={ (e) => handleClick(e.target) }
            data-testid={ `seller_orders__element-order-id-${id}` }
          >
            {id}
          </button>
        </div>

        <div>
          <h4
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            <strong>{status}</strong>
          </h4>
        </div>

        <span data-testid={ `seller_orders__element-order-date-${id}` }>
          {saleDate
            ? saleDate.split('T')[0].split('-').reverse().join('/')
            : null}
        </span>
        <span data-testid={ `seller_orders__element-card-price-${id}` }>
          {`R$${totalPrice.replace('.', ',')}`}
        </span>
        <span data-testid={ `seller_orders__element-card-address-${id}` }>
          { `${deliveryAddress}, ${deliveryNumber}` }
        </span>

      </div>
    );
  };

  return (
    <>
      { order.map((item, index) => makeProducts(item, index))}
    </>
  );
}
