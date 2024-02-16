import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import URLs from '../URLs';
import { motion } from 'framer-motion/dist/framer-motion'; 

function FeaturedCard({ item }) {
  const navigate = useNavigate();


  const handleGoToProductDetial = (item) => {
    navigate(`${URLs.productDetail}/${item.id}`);
  };

  const style = {
    backgroundImage: `url('${item.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
  };

  return (
    <motion.div
    whileHover={{
      y: -4,
      transition: { duration: .3, delay: .02 },
    }}
      className='featured-card'
      onClick={() => handleGoToProductDetial(item)}

    >
      <motion.div
        className='product-image' 
        style={style}
        >
      </motion.div>

      <div className='description'>
        <Link to={URLs.home}>
          <p>{item.title}</p>
        </Link>
        <p>{item.description}</p>
        <div className='cost-btn'>
          <span>{item.price} USD</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
          >Buy now</button>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedCard;
