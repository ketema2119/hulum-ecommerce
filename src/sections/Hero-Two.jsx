import React from 'react';
import { Promo } from '../components';
import { Return, Truck, CartHeroTwo } from '../assets/images';

const item1 = {
  img: Return,
  title: 'Fuss Free Return',
  description: 'We pride ourselves on hassle-free shopping experience'
}

const item2 = {
  img: Truck,
  title: 'Ready in one hour',
  description: 'with Store or Curbside Pickup.'
}

const item3  = {
  img: CartHeroTwo,
  title: 'Priority Shipping',
  description: 'get your item before you even order it!'
}


function HeroTwo() {
  return (
  <section className="hero-two">
    <Promo item={item1} />
    <div className="v-bar" />
    <Promo item={item2} />
    <div className="v-bar" />
    <Promo item={item3} />
  </section>
  );
}

export default HeroTwo;
