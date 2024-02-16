import React from 'react';

function Promo({ item }) {
  return (
    <div className='promo'>
      <img src={item.img} alt='icon' />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
}

export default Promo;
