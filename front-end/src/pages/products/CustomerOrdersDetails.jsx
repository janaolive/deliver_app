import { useState, useEffect } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
/* import { useParams } from 'react-router-dom'; */
import NavBar from './components/NavBar';
import api from '../../services/Api';

export default function CustomOrdersDetails() {
  const [details, setDetails] = useState([]);
  /*   const params = useParams(); */

  const handleFetch = async () => {
    try {
      const detailsList = await api.get('/seller/orders');
      const sales = detailsList.data;
      const result = await sales.filter((sale) => sale.id === 2);
      console.log(result);
      setDetails(result);
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
        details.map((item, index) => {
          const { id, saleDate, status } = item;
          return (
            <ListGroup horizontal key={ index }>
              <ListGroupItem
                data-testid={
                  `customer_order_details__element-order-details-label-order-${id}`
                }
              >
                {id}
              </ListGroupItem>
              <ListGroupItem
                data-
                testid="customer_order_details__element-order-details-label-seller-name"
              >
                P.Vend:
              </ListGroupItem>
              <ListGroupItem
                data-
                testid="customer_order_details__element-order-details-label-order-date"
              >
                {saleDate}
              </ListGroupItem>
              <ListGroupItem
                data-
                testid={
                  `customer_order_details__element-order-details-label-delivery-status
                ${id}`
                }
              >
                {status}
              </ListGroupItem>
              <Button
                type="button"
                data-testid="customer_order_details__button-delivery-check"
              >
                Marcar como Entregue
              </Button>
            </ListGroup>
          );
        })
      }
      <div>oi</div>
    </main>
  );
}
