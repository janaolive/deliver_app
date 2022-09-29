import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
/* import {
  NavLink,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap'; */

export default function NavBar() {
  const userJson = localStorage.getItem('user');
  const user = JSON.parse(userJson);

  const redirect = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('user');
    redirect('/login');
  };
  return (
    <header className="navi">
      <div className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <div>
            <Link
              className="text-dark"
              href="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>
          </div>
          <div>
            <Link
              className="text-dark"
              href="/customer/orders"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus Pedidos
            </Link>
          </div>
          <div
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { user.name }
          </div>
          <div>
            <Link
              className="text-dark"
              href="/"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ handleLogOut }
            >
              Sair
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
