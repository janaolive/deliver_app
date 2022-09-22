import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Label, Button, Alert, Container } from 'reactstrap';

function LoginForm() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/login')
      .then((res) => res.json())
      .then((dataReturn) => setData(dataReturn.message));
  }, []);

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
              data-testid="common_login__input-email"
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
              data-testid="common_login__input-password"
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormGroup>
          <Button
            color="success"
            data-testid="common_login__button-login"
            type="submit"
          >
            Login
          </Button>
          <Button
            outline
            color="success"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </Button>
        </Form>
      </Container>
      { data ? <Alert color="danger">{ data }</Alert> : null }
    </main>
  );
}

export default LoginForm;
