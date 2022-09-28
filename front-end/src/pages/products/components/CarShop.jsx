import { useState, useEffect } from 'react';

export default function CarShop() {
  const productsStorage = localStorage.getItem('products');
  const total = localStorage.setItem('total', 0);
  const [products, setProducts] = useState(productsStorage);

  const sum = (productsObj) => {
    const productsValues = Object.values(JSON.parse(productsObj));
    productsValues.forEach((product) => {
      const { price, quantity } = product;
      const value = quantity * price;
      console.log(value);
    });
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
