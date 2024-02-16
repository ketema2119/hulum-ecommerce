import React from 'react';
import { Link } from 'react-router-dom';
import URLs from '../URLs';

function CategoryCard({ item }) {
  return (
    <Link to={URLs.home} className='category-card'>
        <img src={item.img} alt={item.title} />
        <div className='wrapper'>
          <h4>{item.title}</h4>
          <ul>
            {item.services.map((service) => {
              return <li key={service}>{service}</li>;
            })}
          </ul>
        </div>
    </Link>
  );
}

export default CategoryCard;
