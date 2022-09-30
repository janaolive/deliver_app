// a tela de seller_orders receberá os pedidos agrupados por id e renderizará cada pedido na tela. Ao clicar no pedido, o usuário será redirecionado para a tela de detalhes do pedido

const { useState } = require('react');

export default function SellerOrderDetails() {
  const [order] = useState(0);

  // Passar o id por params depois de implementar o backend
  const id = 1;
  // receber "order" do backend e renderizar no frontend via map
  const { orderStatus, orderDate, orderPrice, orderAdress } = order;

  return (
    <main>
      <div>
        <a href={ `/seller/orders/:${id}` }>
          <div>
            <h4
              data-testid={
                `seller_order_details__element-order-details-label-order-${id}`
              }
            >
              Pedido 000
              {id}
            </h4>
          </div>
        </a>
        <div>
          <h4
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            <strong>{orderStatus || 'PENDENTE'}</strong>
          </h4>
        </div>
        <span data-testid={ `seller_orders__element-order-date-${id}` }>
          {orderDate || '08/04/21'}
        </span>
        <span data-testid={ `seller_orders__element-card-price-${id}` }>
          { orderPrice || 'R$23,80'}
        </span>
        <span data-testid={ `seller_orders__element-card-address-${id}` }>
          { orderAdress || 'Rua Irmãos Monteiro, Bairro Pedras, 851' }
        </span>
        <div />
      </div>

      <div>
        <div>
          <a href={ `/seller/orders/:${id}` }>
            <h4
              data-testid={
                `seller_order_details__element-order-details-label-order-${id}`
              }
            >
              Pedido 000
              {id + 1 }
            </h4>
          </a>
        </div>
        <div>
          <h4
            data-testid={ `seller_orders__element-delivery-status-${id + 1}` }
          >
            <strong>{orderStatus || 'PREPARANDO'}</strong>
          </h4>
        </div>
        <span data-testid={ `seller_orders__element-order-date-${id + 1}` }>
          {orderDate || '08/04/21'}
        </span>
        <span data-testid={ `seller_orders__element-card-price-${id + 1}` }>
          { orderPrice || 'R$14,20'}
        </span>
        <span data-testid={ `seller_orders__element-card-address-${id + 1}` }>
          { orderAdress || 'Rua Vila Bela, Bairro Gurupi, 670' }
        </span>
        <div />
      </div>

      <div>
        <div>
          <a href={ `/seller/orders/:${id}` }>
            <h4
              data-testid={
                `seller_order_details__element-order-details-label-order-${id + 2}`
              }
            >
              Pedido 000
              {id + 2}
            </h4>
          </a>
        </div>
        <div>
          <h4
            data-testid={ `seller_orders__element-delivery-status-${id + 2}` }
          >
            <strong>{orderStatus || 'ENTREGUE'}</strong>
          </h4>
        </div>
        <span data-testid={ `seller_orders__element-order-date-${id + 2}` }>
          {orderDate || '07/04/21'}
        </span>
        <span data-testid={ `seller_orders__element-card-price-${id + 2}` }>
          { orderPrice || 'R$28,46'}
        </span>
        <span data-testid={ `seller_orders__element-card-address-${id + 2}` }>
          { orderAdress || 'Rua Sessenta e Dois, Bairro Maranguape II, 533' }
        </span>
        <div />
      </div>
    </main>
  );
}
