import { useEffect, useState } from 'react';
// import { Card, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';
import api from '../../services/Api';

export default function SellerOrders() {
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);

  const handleFetch = async () => {
    try {
      const orderId = JSON.parse(localStorage.getItem('orderDetails'));
      const { id } = orderId.data;
      const product = await api.get(`/sale/orders/${id}`);
      setOrder(product.data);
      setProducts(product.data.products);
    } catch (error) {
      return error;
    }
  };

  const detailsProducts = async (items) => {
    setDetails([]);
    items?.map(async (item) => {
      const result = await api.get(`/customer/products/${item.productId}`);
      return details.push(result.data);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    detailsProducts();
  }, [products]);

  const makeProducts = (product, index) => {
    const { name, price } = product;
    const { quantity } = product.SaleProduct;
    return (
      <div key={ index }>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                data-testid={ `seller_order_details__element-order-table-item-number-
            ${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-name-${index}` }
              >
                {name}
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-quantity-
              ${index}` }
              >
                {quantity}
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-unit-price-
            ${index}` }
              >
                {price}
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-sub-total-
              ${index}` }
              >
                R$
                {price}
              </td>
            </tr>
          </tbody>
        </table>
        <footer>
          <h2 data-testid="seller_order_details__element-order-total-price">
            Total: R$
            {' '}
            {quantity * price}
          </h2>
        </footer>
      </div>
    );
  };

  const { status, id, saleDate } = order;
  console.log(id);
  return (
    <>
      <h4>Detalhes do Pedido</h4>
      <div>
        <h3
          data-testid={
            `seller_order_details__element-order-details-label-order-${id}`
          }
        >
          {`PEDIDO 000${id}`}
        </h3>
        <span data-testid="seller_order_details__element-order-details-label-order-date">
          {saleDate}
        </span>
        <h3
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {status}
        </h3>
        <button type="submit" data-testid="seller_order_details__button-preparing-check">
          PREPARAR PEDIDO
        </button>
        <button type="submit" data-testid="seller_order_details__button-dispatch-check">
          SAIU PARA ENTREGA
        </button>
      </div>
      { products.map((product, index) => makeProducts(product, index))}
    </>
  );
}
