import React from 'react';

const rateview = (rating, HalfStar, FullStar) => {
  const normalized = Math.ceil(rating);
  return [...Array(normalized).keys()].map((index) => {
    if (index + 1 === normalized && rating < normalized)
      return <img key={index} src={HalfStar} alt='Half star' />;
    return <img key={index} src={FullStar} alt='Full star' />;
  })
}

export {
  rateview
}