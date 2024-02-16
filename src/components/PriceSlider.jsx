import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRICE_RANGE } from '../store';

function PriceSlider() {
  const dispatch = useDispatch();
  const priceRange = useSelector((state) => state.sideBar.priceRange);
  const maxPrice = useSelector((state) => state.variables. maxPrice);
  const filteredProducts = useSelector((state) => state.filteredProducts);

  const handleOnChange = (_, data) => {
    dispatch({type: SET_PRICE_RANGE, payload: data});
  };

  return (
    <div className='price-slider'>
      <div className='price-title'>
        <div className='title'>PRICE</div>
        <div className='item-amount'>{filteredProducts.length}</div>
      </div>
      <div className='range-view'>{`$ ${priceRange[0]} - ${priceRange[1]}`}</div>
      <div className='slider'>
        <Slider
          style={{ color: '#6B6B6B' }}
          size={'small'}
          min={0}
          max={maxPrice}
          valueLabelDisplay='auto'
          value={priceRange}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}

export default PriceSlider;
