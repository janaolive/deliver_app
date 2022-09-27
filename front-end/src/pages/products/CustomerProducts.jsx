import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import api from '../../services/Api';
import NavBar from './components/NavBar';

export default function CustomProducts() {
  const [products, setProducts] = useState([]);
  const [showError, setError] = useState(false);

  function makeProducts(product) {
    return (
      <Card
        key={ product.id }
        style={ {
          width: '18rem',
        } }
      >
        <img
          alt={ product.name }
          src={ product.url_image }
        />
        <CardBody>
          <CardTitle tag="h5">
            { product.name }
          </CardTitle>
        </CardBody>
      </Card>
    );
  }

  const handleFetch = async () => {
    try {
      const product = await api.get('/customer/products');
      console.log(product);
      setProducts(product.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <main>
      <NavBar />
      <div>
        { showError
          ? null
          : products.map((product) => makeProducts(product)) }
      </div>
    </main>
  );
}
