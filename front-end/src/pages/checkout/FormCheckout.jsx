export default function FormCheckout() {
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
