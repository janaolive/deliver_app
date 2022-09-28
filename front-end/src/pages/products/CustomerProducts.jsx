import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';

import api from '../../services/Api';
import CarShop from './components/CarShop';
import NavBar from './components/NavBar';

export default function CustomProducts() {
  const [products, setProducts] = useState([]);
  const [showError, setError] = useState(false);
  const [valueState, setValue] = useState({});

  const validadeButton = (target, prod) => {
    const { name } = target;
    const { id, price } = prod;
    const nome = prod.name;
    const product = JSON.parse(localStorage.getItem('products'));
    let productQnt = product[prod.name].quantity;
    switch (name) {
    case 'mais':
      (productQnt) += 1;
      localStorage.setItem('products', JSON.stringify({ ...product,
        [prod.name]: {
          name: nome,
          id,
          price,
          quantity: productQnt,
          subTotal: 0,
        } }));
      setValue({ ...product,
        [prod.name]: {
          name: nome,
          id,
          price,
          quantity: productQnt,
          subTotal: 0,
        } });
      break;
    case 'menos':
      if (productQnt > 0) {
        localStorage.setItem('products', JSON.stringify({ ...product,
          [prod.name]: {
            name: nome,
            id,
            price,
            quantity: productQnt - 1,
            subTotal: 0,
          } }));
        setValue({ ...product,
          [prod.name]: {
            name: nome,
            id,
            price,
            quantity: productQnt - 1,
            subTotal: 0,
          } });
      }
      break;
    default:
    }
  };

  const inputOnFocus = (target) => {
    target.value = '';
  };

  const inputOnBlur = (target) => {
    target.value = valueState[target.id];
  };

  const inputHandle = (target) => {
    const { value, id } = target;
    setValue({
      ...valueState,
      [id]: Number(value),
    });
    const product = JSON.parse(localStorage.getItem('products'));
    localStorage.setItem('products', JSON.stringify({ ...product, [id]: value }));
  };

  function makeProducts(product, index) {
    const { id } = product;
    return (
      <Card
        key={ index }
        style={ {
          width: '18rem',
        } }
      >
        <img
          alt={ product.name }
          src={ product.urlImage }
          className="img-fluid img-thumbnail"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <CardBody className="bodyCard">
          <CardTitle
            tag="h5"
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            { product.name }
          </CardTitle>
          <CardText
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            { product.price.replace('.', ',') }
          </CardText>
          <div className="cardButton">
            <Button
              color="success"
              name="menos"
              data-testid={ `customer_products__button-card-add-item-${id}` }
              onClick={ (e) => validadeButton(e.target, product) }
            >
              -
            </Button>
            <Input
              type="text"
              data-testid={ `customer_products__input-card-quantity-${id}` }
              placeholder="0"
              value={ valueState[product.name] ? valueState[product.name].quantity : 0 }
              onChange={ (e) => inputHandle(e.target) }
              onFocus={ (e) => inputOnFocus(e.target) }
              onBlur={ (e) => inputOnBlur(e.target) }
            />
            <Button
              color="success"
              name="mais"
              id={ product.name }
              onClick={ (e) => validadeButton(e.target, product) }
              data-testid={ `customer_products__button-card-rm-item-${id}` }
            >
              +
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }

  const handleFetch = async () => {
    try {
      const product = await api.get('/customer/products');
      setProducts(product.data);
      const nameMap = product.data.map(({ name, id, price }) => ({ name, id, price }))
        .reduce((acc, curr) => {
          /* console.log('acc', acc);
          console.log('curr', curr); */
          acc[curr.name] = {
            name: curr.name,
            id: curr.id,
            price: curr.price,
            quantity: 0,
            subTotal: 0,
          };
          return acc;
        }, {});
      setValue(nameMap);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(valueState));
  }, [valueState]);

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <main>
      <NavBar />
      <div className="cardGroup">
        { showError
          ? null
          : products.map((product, index) => makeProducts(product, index)) }
      </div>
      <CarShop />
    </main>
  );
}
