import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button, Alert, Container } from 'reactstrap';

function LoginForm() {
  const alert = (
    <Alert
      color="danger"
    >
      This is a primary alert — check it out!
    </Alert>);
  const [errorMessage, setMessage] = useState(false);
  const showOrHide = () => {
    if (errorMessage === true) setMessage(false);
    if (errorMessage === false) setMessage(true);
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
          >
            Login
          </Button>
          <Button
            outline
            color="success"
            data-testid="common_login__button-register"
            onClick={ showOrHide }
          >
            Ainda não tenho conta
          </Button>
        </Form>
      </Container>
      { errorMessage ? alert : null }
    </main>
  );
}

export default LoginForm;
