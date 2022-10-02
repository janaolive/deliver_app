export default function Header() {
  return (
    <nav>
      {/* não esquecer de implementar rota depois */}
      <a href="/orders" data-testid="customer_products__element-navbar-link-orders">
        Pedidos
      </a>
      {/* não esquecer de implementar rota depois */}
      <a href="/" data-testid="customer_products__element-navbar-user-full-name">
        Fulana Pereira
      </a>
      {/* redireciona para login */}
      <a href="/" data-testid="customer_products__element-navbar-link-logout">
        Sair
      </a>
    </nav>
  );
}
