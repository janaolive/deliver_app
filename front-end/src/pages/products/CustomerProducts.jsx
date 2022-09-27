import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';

import api from '../../services/Api';
import NavBar from './components/NavBar';

export default function CustomProducts() {
  const [products, setProducts] = useState([]);
  const [showError, setError] = useState(false);
  const [valueState, setValue] = useState({});

  const validadeButton = (target) => {
    const { name, id } = target;
    const product = JSON.parse(localStorage.getItem('products'));
    let productQnt = product[id];
    switch (name) {
    case 'mais':
      productQnt += 1;
      localStorage.setItem('products', JSON.stringify({ ...product, [id]: productQnt }));
      setValue({ ...product, [id]: productQnt });
      break;
    case 'menos':
      if (productQnt > 0) {
        localStorage
          .setItem('products', JSON.stringify({ ...product, [id]: productQnt - 1 }));
        setValue({ ...product, [id]: productQnt - 1 });
      }
      break;
    default:
    }
  };

  const inputHandle = (target) => {
    const { value, id } = target;
    setValue({
      ...valueState,
      [id]: value,
    });
    const product = JSON.parse(localStorage.getItem('products'));
    localStorage.setItem('products', JSON.stringify({ ...product, [id]: value }));
  };

  function makeProducts(product, index) {
    const id = index + 1;
    return (
      <Card
        key={ product.id }
        style={ {
          width: '18rem',
        } }
      >
        <img
          alt={ product.name }
          src={ product.urlImage }
          className="img-fluid img-thumbnail"
          data-testid={ `customer_products__element-bg-image-${id}` }
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
            R$
            { product.price }
          </CardText>
          <div className="cardButton">
            <Button
              color="success"
              name="menos"
              id={ product.name }
              data-testid={ `customer_products__element-add-item-${id}` }
              onClick={ (e) => validadeButton(e.target) }
            >
              -
            </Button>
            <Input
              type="number"
              data-testid={ `customer_products__element-quantity-${id}` }
              placeholder="0"
              value={ valueState[product.name] || '' }
              id={ product.name }
              onChange={ (e) => inputHandle(e.target) }
            />
            <Button
              color="success"
              name="mais"
              id={ product.name }
              onClick={ (e) => validadeButton(e.target) }
              data-testid={ `customer_products__element-rm-item-${id}` }
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
      console.log(product);
      setProducts(product.data);
      const nameMap = product.data.map((produto) => produto.name)
        .reduce((acc, curr) => {
          acc[curr] = 0;
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
    </main>
  );
}
