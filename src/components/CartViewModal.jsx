import React from 'react';
import CartItemView from './CartItemCard';
import { useSelector } from 'react-redux';
import { CloseCircleOutlined } from '../assets/images';
import reactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { SET_MODAL } from '../store';
import { motion } from 'framer-motion/dist/framer-motion';

function CartViewModal() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  
  return reactDom.createPortal(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: .3}}}
      transition={{duration: .3}}
      className='background'
      onClick={() => {
        dispatch({ type: SET_MODAL, payload: false });
      }}
    >
      <motion.div
        initial={{x: '100%'}}
        animate={{x: 0, transition: {duration: .3}}}


        className='cart-view-modal'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='close-modal'>
          <img
            src={CloseCircleOutlined}
            alt='close button'
            onClick={() => {
              dispatch({ type: SET_MODAL, payload: false });
            }}
          />
        </div>
        {cartItems.length ? (
          <>
            <div className='cart-items'>
              {cartItems.map((item) => {
                return (
                  <CartItemView key={item.product.id} item={item} />
                );
              })}
            </div>
            <div className='sub-total'>
              <span className='title'>Subtotal:</span>
              <span className='value'>
                $
                {cartItems
                  .reduce((acc, { product, quantity }) => {
                    return (acc += product.price * quantity);
                  }, 0)
                  .toFixed(2)}
              </span>
            </div>
            <hr className='hr' />
            <div className='checkout'>
              <button>Checkout</button>
            </div>
          </>
        ) : (
          <span className='no-products'>No products in the cart</span>
        )}
      </motion.div>
    </motion.div>,
    document.querySelector('#portal')
  );
}

export default CartViewModal;
