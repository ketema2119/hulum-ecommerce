import React from 'react';
import {
  Hero,
  HeroTwo,
  Categories,
  FeaturedProducts,
  NewsLetter,
  LastMinuteDeals,
  Footer,
} from '../sections';

function Landing() {
  return (
    <>
      <Hero />
      <HeroTwo />
      <Categories />
      <FeaturedProducts />
      <NewsLetter />
      <LastMinuteDeals />
      <Footer />
    </>
  );
}

export default Landing;
