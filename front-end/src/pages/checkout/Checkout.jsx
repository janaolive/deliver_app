import FormCheckout from './FormCheckout';
import TableCheckout from './TableCheckout';

export default function Checkout() {
  return (
    <main>
      <h3>Finalizar pedido</h3>
      <TableCheckout />
      <FormCheckout />
      <button
        type="button"
        // onClick={}
        data-testid="customer_checkout__button-submit-order"
      >
        Total:
      </button>
    </main>
  );
}
