import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button, Alert, Container } from 'reactstrap';

function RegisterForm() {
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
      <h1>Cadastro</h1>
      <Container className="bg-light border">
        <Form>
          <FormGroup>
            <Label for="common_register__input-name">
              Nome
            </Label>
            <Input
              data-testid="common_register__input-name"
              name="Name"
              placeholder="Nome"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="common_register__input-email">
              Email
            </Label>
            <Input
              data-testid="common_register__input-email"
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="common_register__input-password">
              Senha
            </Label>
            <Input
              data-testid="common_register__input-password"
              name="password"
              placeholder="Senha"
              type="password"
            />
          </FormGroup>
          <Button
            color="success"
            onClick={ showOrHide }
            data-testid="common_register__button-register"
          >
            Cadastrar
          </Button>
        </Form>
      </Container>
      { errorMessage ? alert : null }
    </main>
  );
}

export default RegisterForm;
