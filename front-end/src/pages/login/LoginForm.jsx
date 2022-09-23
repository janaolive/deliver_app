import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button, Alert, Container } from 'reactstrap';
import UserContext from '../../context/user/context';
import api from '../../services/Api';
import { validateLogin } from '../../services/validateLogin';

export default function LoginForm() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);

  const redirect = useNavigate();
  async function redirectUser(user) {
    switch (user.role) {
    case 'customer':
      redirect('/customer/products');
      break;
    case 'seller':
      redirect('/seller/orders');
      break;
    case 'admin':
      redirect('/admin/manage');
      break;
    default:
      redirect('notFound');
    }
  }
  const handleSubmit = async () => {
    try {
      const login = await api.post('/login', { email, password });
      setUser(login);
      localStorage.setItem('user', JSON.stringify(login.data));
      await redirectUser(login.data);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <main>
      <div>
        logo
        <h1>Nome do app</h1>
      </div>
      <Container className="bg-light border">
        <Form>
          <FormGroup>
            <Label for="common_login__input-email">
              Email
            </Label>
            <Input
              required
              data-testid="common_login__input-email"
              onChange={ ({ target: { value } }) => setEmail(value) }
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="common_login__input-password">
              Password
            </Label>
            <Input
              required
              data-testid="common_login__input-password"
              onChange={ ({ target: { value } }) => setPassword(value) }
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormGroup>
          <Button
            color="success"
            data-testid="common_login__button-login"
            disabled={ validateLogin(email, password) }
            onClick={ handleSubmit }
            type="button"
          >
            Login
          </Button>
          <Button
            outline
            color="success"
            data-testid="common_login__button-register"
            onClick={ () => { redirect('/register'); } }
          >
            Ainda não tenho conta
          </Button>
        </Form>
      </Container>
      { showError ? <Alert color="danger">Usuário não encontrado!</Alert> : null }
    </main>
  );
}
