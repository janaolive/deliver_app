import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import api from '../../services/Api';

export default function CustomOrdersDetails() {
  const [details, setDetails] = useState([]);

  const handleFetch = async () => {
    try {
      const detailsList = await api.get('/seller/orders');
      console.log(detailsList.data);
      setDetails(detailsList.data);
    } catch (error) {
      throw new Error('teste');
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main>
      <NavBar />
      <h3>Detalhe do Pedido</h3>
      {
        details.map((item, index) => (
          <div key={ index }>
            <div>
              <p
                data-testid="customer_order_details__element-order-details-label-order-id"
              >
                {' '}
                {item.id}
              </p>
              <p
                data-
                testid="customer_order_details__element-order-details-label-seller-name"
              >
                P.Vendedora:
              </p>
              <p
                data-
                testid="customer_order_details__element-order-details-label-order-date"
              >
                {item.saleDate}
              </p>
              <p
                data-
                testid={
                  `customer_order_details__element-order-details-label-delivery-status
                  ${item.id}`
                }
              >
                {item.status}
              </p>
              <button
                type="button"
                data-testid="customer_order_details__button-delivery-check"
              >
                Marcar como Entregue
              </button>
            </div>
          </div>

        ))
      }
      <div>oi</div>
    </main>
  );
}
