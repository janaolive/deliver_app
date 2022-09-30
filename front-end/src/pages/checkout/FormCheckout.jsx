import api from '../../services/Api';

export default function FormCheckout() {
  /* const setSaleStorage = () => {
    const newSale = {
      userId: 3,
      sellerId: 2,
      totalPrice: 22333,
      deliveryAddress: Rua Brasil, Bloco Trybe,
      deliveryNumber: 986490818,
      status: Pendente,
      products: [
        {
          id: 1,
          quantity: 3
        }
      ]
    } */

  // pegar valor dos inputs
  // salvar tudo como uma chave no localStorage

  return (
    <div>
      <form>
        <label htmlFor="seller">
          Vendedor responsável
          <select
            name="seller"
            data-testid="customer_checkout__select-seller"
          >
            <option value="2">Fulana Pereira</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            type="number"
            data-testid="customer_checkout__input-address-number"
          />
        </label>
      </form>
    </div>
  );
}
