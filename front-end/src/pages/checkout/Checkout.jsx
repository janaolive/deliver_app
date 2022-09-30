import NavBar from '../products/components/NavBar';
import FormCheckout from './FormCheckout';
import TableCheckout from './TableCheckout';
import api from '../../services/Api';

export default function Checkout() {
  // pegar as duas chaves do local storage, uma da tabela ou do formulário
  // enviar aqui para a rota e fazer o redirect
  const handleClick = async () => {
    try {
      const product = await api.post('/customer/orders', {});
      redirect(`/customer/orders/${product}`);
    } catch (error) {
      throw new Error('teste');
    }
  };

  return (
    <main>
      <NavBar />
      <h3>Finalizar pedido</h3>
      <TableCheckout />
      <h4>Detalhes e Endereço para Entrega</h4>
      <FormCheckout />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </main>
  );
}
