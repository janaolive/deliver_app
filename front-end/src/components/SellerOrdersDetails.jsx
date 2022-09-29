const { useState } = require('react');

export default function SellerOrderDetails() {
  const [order] = useState(0);

  const id = 1;
  const { orderStatus, orderDate, quantity, price, index, name } = order;

  return (
    <main>
      <h4>Detalhe do Pedido</h4>
      <div>
        <h3
          data-testid={
            `seller_order_details__element-order-details-label-order-${id}`
          }
        >
          PEDIDO 000
          {id}
        </h3>
        <span data-testid="seller_order_details__element-order-details-label-order-date">
          {orderDate || '08/04/2021'}
        </span>
        <h3
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {orderStatus || 'PENDENTE'}
        </h3>
        <button type="submit" data-testid="seller_order_details__button-preparing-check">
          PREPARAR PEDIDO
        </button>
        <button type="submit" data-testid="seller_order_details__button-dispatch-check">
          SAIU PARA ENTREGA
        </button>
      </div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
        </tr>
        <td
          data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
        >
          {index || '1'}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-name-${index}` }
        >
          {name || 'Skol Lata 250ml'}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
        >
          {quantity || '4'}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
        >
          {price || 'R$2,20'}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          R$
          {price || '8,80'}
        </td>
      </table>
      <footer>
        <h2 data-testid="seller_order_details__element-order-total-price">
          Total: R$
          {' '}
          {quantity * price || '23,80'}
        </h2>
      </footer>
    </main>
  );
}
