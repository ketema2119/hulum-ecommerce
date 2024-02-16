import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryCard } from '../components';
import { catIcons } from '../assets/images';
import URLs from '../URLs';

const categories = [
  {
    img: catIcons.Electronics,
    title: 'Electronics',
    services: [
      'Mobile Phones',
      'Laptops',
      'Computer Accessories',
      'Audio & Video Equipment',
      'Other Electronics',
    ],
  },
  {
    img: catIcons.FashinBeatuy,
    title: 'Fashion & Beauty',
    services: [
      'Bath Supplies',
      'Cloths',
      'Beauty Equipment',
      'Body Art',
      'False Eyelashes & Tools',
    ],
  },
  {
    img: catIcons.Service,
    title: 'Services',
    services: [
      'Advertising',
      'Computer & IT Services',
      'Financial Services',
      'Events, Wedding & Catering',
      'Assurance Services',
    ],
  },
  {
    img: catIcons.Vehicle,
    title: 'Vehicles & Accessories',
    services: [
      'Car Tools & Equipment',
      'Car Body Parts & Interior',
      'Tyres & Rims',
      'Car Alarms',
    ],
  },
  {
    img: catIcons.Kids,
    title: 'Kids',
    services: [
      'Mobile Phones',
      'Laptops',
      'Computer Accessories',
      'Audio & Video Equipment',
      'Other Electronics',
    ],
  },
  {
    img: catIcons.HomeGarden,
    title: 'Home & Garden',
    services: [
      'Mobile Phones',
      'Laptops',
      'Computer Accessories',
      'Audio & Video Equipment',
      'Other Electronics',
    ],
  },
  {
    img: catIcons.Construction,
    title: ' Construction ',
    services: [
      'Mobile Phones',
      'Laptops',
      'Computer Accessories',
      'Audio & Video Equipment',
      'Other Electronics',
    ],
  },
  {
    img: catIcons.Food,
    title: 'Food & Beverage',
    services: [
      'Mobile Phones',
      'Laptops',
      'Computer Accessories',
      'Audio & Video Equipment',
      'Other Electronics',
    ],
  },
];


function Categories() {
  return (
    <section className='categories'>
      <h2>CATEGORIES</h2>
      <article className='content'>
        <div className='wrapper'>
          <div className='cards'>
            {categories.map((category) => (
              <CategoryCard key={category.title} item={category} />
            ))}
          </div>
          <div className='view-all'>
            <Link to={URLs.products}>View All</Link>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Categories;
