import React from 'react';
import { Link } from 'react-router-dom';
import URLs from '../URLs';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { rateview } from '../utils';
import { HalfStar, FullStar } from '../assets/images';
import { Footer } from '../sections';
import { motion } from 'framer-motion/dist/framer-motion';


function ProductDetail({ item }) {
  const imgStyle = {
    backgroundImage: `url('${item.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
  };

  return (
    <motion.div 
      className='product-detail'
      initial={{ scale: 1.003, opacity: .7}}
      animate={{ scale: 1, opacity: 1}}  
      transition={{duration: .15}}
    >
      <div className='wrapper'>
        <div className='container'>
          <div className='navigation'>
            <Link to={URLs.home}>Home</Link>
            <ArrowForwardIosIcon style={{ color: '#454545' }} />
            <Link to={URLs.home}>{item.category}</Link>
            <ArrowForwardIosIcon style={{ color: '#454545' }} />
            <Link to={URLs.home}>{item.title}</Link>
          </div>
          <div className='product'>
            <div className='imgs'>
              <div className='side-images'>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
              </div>
              <div className='main-img' style={imgStyle}></div>
            </div>
            <div className='description'>
              <div className='product-name'>{item.title}</div>
              <div className='brand'>
                <span>Brand:</span> {item.brand}
              </div>
              <div className='stars'>
                {rateview(item? item.rating.rate: 0, HalfStar, FullStar)}
                <span className='raters'>({item.rating.count})</span>
              </div>
              <div className='full-detail'>{item.description}</div>
              <div className='price'>{`$ ${item.price}`}</div>
              <div className='product-size'>
                <input type='number' name='size' id='size' min='1' />
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
          <span className='related-products'>Related Products</span>
        </div>
      </div>

      <div className='related-products'></div>

      <div className='footer'>
        <Footer />
      </div>
    </motion.div>
  );
}

export default ProductDetail;
