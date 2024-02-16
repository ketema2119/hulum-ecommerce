import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '../views';
import { useSelector } from 'react-redux';

function ProductDetailNavigator() {
  const { product_id } = useParams();
  const products = useSelector((state) => state.products);
  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(products.find((item) => item.id == product_id));
  }, [products]);

  if (item) return <ProductDetail item={item} />;
  return null;
}

export default ProductDetailNavigator;
