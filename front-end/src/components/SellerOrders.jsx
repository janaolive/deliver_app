const { useState } = require('react');

export default function SellerOrderDetails() {
  const [order] = useState(0);

  const id = 1;
  const { orderStatus, orderDate } = order;

  return (
    <section>
      <h2>Detalhe do Pedido</h2>
      <div>
        <h3
          data-testid={
            `seller_order_details__element-order-details-label-order-${id}`
          }
        >
          <strong>PEDIDO</strong>
        </h3>
        <h3 data-testid="seller_order_details__element-order-details-label-order-date">
          <strong>{orderDate || 'Data'}</strong>
        </h3>
        <h3
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          <strong>{orderStatus || 'PENDENTE'}</strong>
        </h3>
        <h3 data-testid="seller_order_details__button-preparing-check">
          PREPARAR PEDIDO
        </h3>
        <h3 data-testid="seller_order_details__button-dispatch-check">
          SAIU PARA ENTREGA
        </h3>
      </div>
      <div>
        <h4>Item</h4>
        <h4>Descrição</h4>
        <h4>Quantidade</h4>
        <h4>Valor Unitário</h4>
        <h4>Sub-Total</h4>
      </div>
      <div>
        <span
          data-testid={ `seller_order_details__element-order-table-item-number-${id}` }
        >
          1
        </span>
        <span
          data-testid={ `seller_order_details__element-order-table-name-${id}` }
        >
          Skol Lata 250ml
        </span>
        <span
          data-testid={ `seller_order_details__element-order-table-quantity-${id}` }
        >
          4
        </span>
        <span
          data-testid={ `seller_order_details__element-order-table-unit-price-${id}` }
        >
          R$2,20
        </span>
        <span
          data-testid={ `seller_order_details__element-order-table-sub-total-${id}` }
        >
          R$8,80
        </span>
      </div>
      <div>
        <h2 data-testid="seller_order_details__element-order-total-price">
          Total: R$23,80
        </h2>
      </div>
    </section>
  );
}
