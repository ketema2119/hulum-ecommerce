import React from 'react';
import { CartHero } from '../assets/images';
import { useNavigate } from 'react-router-dom';
import URLs from '../URLs';
import { motion } from 'framer-motion/dist/framer-motion';

function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate(URLs.products);
  };

  const handleSignUp = () => {
    navigate(URLs.register);
  };
  return (
    <section className='hero'>
      <div className='container'>
        <motion.div 
          className='content'
          initial={{y: '1.7rem', opacity: .3}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: .7}}
          >
          <h3>SHOP ANYTHING</h3>
          <h1>
            Make Your Explore
            <br />
            Easy With Us.
          </h1>
          <p>
          Discover endless possibilities with our vast selection of top-quality products. 
          From fashion to tech, home decor to outdoor gear. 
          </p>
        </motion.div>
        <div className='btns'>
          <motion.button 
            initial={{scale: .8, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{ duration: .1, delay: 1.3, type:'spring', stiffness: 350}}
            className='btn-cart' 
            onClick={handleShopNow}
          >
            <img src={CartHero} />
            <span>Shop Now</span>
          </motion.button>
          <motion.button 
            className='btn-sign-up' 
            onClick={handleSignUp}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: .5, delay: 1.7}}
          >
            <span>Sign Up</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
