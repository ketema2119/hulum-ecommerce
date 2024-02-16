import React from 'react';
import { CloseCircleForItmes } from '../assets/images';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import URLs from '../URLs';
import { SET_MODAL, REMOVE_FROM_CART, SET_ITEM_QUANTITY } from '../store';

function cartItemView({ item: { product, quantity } }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setItemQuantity = (quantity) => {
    if (quantity > 0) {
      dispatch({
        type: SET_ITEM_QUANTITY,
        payload: { product, quantity },
      });
    }
  };

  const handleGoToProductDetial = (product) => {
    navigate(`${URLs.productDetail}/${product.id}`);
  };

  return (
    <div
      className='cart-item-card'
      onClick={() => {
        handleGoToProductDetial(product);
        dispatch({ type: SET_MODAL, payload: false });
      }}
    >
      <div className='container'>
        <img
          className='product-image'
          src={product.image}
          alt={`product ${product.title}`}
        />
        <div className='content'>
          <div className='product-title'>
            <p>{product.title}</p>
          </div>
          <div className='quantity-view'>
            <div className='sub-total-view'>
              <input
                defaultValue={quantity}
                type='number'
                min='1'
                onChange={(e) => {
                  setItemQuantity(e.target.value);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
              <span>X {`$${product.price}`}</span>
            </div>
            <img
              className='delete-item'
              src={CloseCircleForItmes}
              alt='close icon'
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: REMOVE_FROM_CART, payload: { product } });
              }}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default cartItemView;
