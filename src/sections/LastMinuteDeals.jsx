import React from 'react';
import { ProductCard } from '../components';
import { useSelector } from 'react-redux';


function LastMinuteDeals() {
  const products = useSelector((state) => state.products);

  return (
    <div className="last-min-deal">
      <h4>LAST MINUTE DEALS</h4>
      <div className="product-grid">
        {
          products.map((item) => {
            return <ProductCard key={item.id} item={item} />
          })
        }
      </div>
    </div>  
  )
}

export default LastMinuteDeals