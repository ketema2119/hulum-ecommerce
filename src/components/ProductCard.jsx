import React from 'react';
import {
  CartCard,
  ProductAddedTick,
  FullStar,
  HalfStar,
} from '../assets/images';
import URLs from '../URLs';
import { rateview } from '../utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../store';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion/dist/framer-motion';

function ProductCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const style = {
    backgroundImage: `url('${item.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
  };

  const itemExistsInCart = () => {
    return products.find(({ product }) => product.id === item.id);
  };

  const handleGoToProductDetial = (item) => {
    navigate(`${URLs.productDetail}/${item.id}`);
  };

  const handleAddToCart = () => {
    if (!itemExistsInCart()) dispatch({ type: ADD_TO_CART, payload: item });
    else dispatch({ type: REMOVE_FROM_CART, payload: { product: item } });
  };

  return (
    <div className='product-card'>
      <div className='content' onClick={() => handleGoToProductDetial(item)}>
        <div className='product-image'>
          <motion.div
            style={style}
            className='image'
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
          ></motion.div>
        </div>
        <div className='description'>
          <div className='category'>{item.category}</div>
          <h5 className='product-name'>
            <p>{item.title}</p>
          </h5>
          <div className='product-desc'>{item.description}</div>
          <div className='rating'>
            {rateview(item.rating.rate, HalfStar, FullStar)}
          </div>
          <div className='price'>{item.price} USD</div>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        style={itemExistsInCart() ? { backgroundColor: '#f6f6f6' } : null}
      >
        <div>
          <img
            src={itemExistsInCart() ? ProductAddedTick : CartCard}
            alt='cart icon'
          />
          <span>ADD TO CART</span>
        </div>
      </button>
    </div>
  );
}

export default ProductCard;
