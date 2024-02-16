import React from 'react';
import { Hamburger, Grid } from '../assets/images';
import { ProductCard, SideBar } from '../components';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion/dist/framer-motion';

function Products() {
  const filteredProducts = useSelector((state) => state.filteredProducts);

  return (
    <motion.div
      className='products'
      initial={{ scale: 1.01, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className='container'>
        <div className='view-mode'>
          <img src={Grid} alt='grid' />
          <img src={Hamburger} alt='hamburger' />
        </div>
        <div className='contents'>
          <SideBar />
          <div className='wrapper'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0, delay: 0.5 }}
              className='product-view'
            >
              {
              filteredProducts.map((item, index) => {
                return (
                  <motion.div
                    key={item.id}
                    className='anim'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.04, delay: 0.5 + index * 0.07 }}
                  >
                    <ProductCard item={item} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Products;
