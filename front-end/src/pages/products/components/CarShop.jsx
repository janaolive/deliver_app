import { useState, useEffect } from 'react';

export default function CarShop() {
  const [total, setTotal] = useState(0);
  const productsStorage = localStorage.getItem('products');
  const [products, setProducts] = useState(productsStorage);

  const sum = (productsObj) => {
    const productsValues = Object.values(JSON.parse(productsObj));
    console.log('bla bla', productsValues);
  };
  useEffect(() => {
    sum(products);
  }, [products]);

  useEffect(() => {
    setProducts(productsStorage);
  }, [productsStorage]);

  return (
    <div>
      { total }
    </div>
  );
}
