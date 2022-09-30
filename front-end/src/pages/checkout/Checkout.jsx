import NavBar from '../products/components/NavBar';
import FormCheckout from './FormCheckout';
import TableCheckout from './TableCheckout';

export default function Checkout() {
  return (
    <main>
      <NavBar />
      <h3>Finalizar pedido</h3>
      <TableCheckout />
      <h4>Detalhes e Endereço para Entrega</h4>
      <FormCheckout />
      <button
        type="button"
        // onClick={}
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </main>
  );
}
