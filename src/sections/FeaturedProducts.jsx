import React, { useEffect, useRef, useState } from 'react';
import { FeaturedCard } from '../components';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';

function FeaturedProducts() {
  const products = useSelector((state) => state.products);
  const carouselWidth = useRef(null);
  const carouselRef = useRef(null);
  const timerRef = useRef(null);
  const [noOfCards, setNoOfCards] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    const cardWidth = 21.7;
    const spacing = 3.4;
    let no_of_cards = 0;
    const oneRem = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const timer = setInterval(() => {
      const widthInRem = carouselWidth.current
        ? carouselWidth.current.clientWidth / oneRem
        : 0;
      no_of_cards = Math.floor(widthInRem / (cardWidth + spacing));
      if (noOfCards !== no_of_cards) {
        setNoOfCards(no_of_cards);
      }
    }, 16);

    return () => {
      clearInterval(timer);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className='featured-products'>
      <h4>FEATURED PRODUCTS</h4>
      <div className='wrapper'>
        <div
          className='container'
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)}
          ref={carouselWidth}
        >
          <Carousel
            ref={carouselRef}
            pagination={false}
            itemsToShow={noOfCards}
            transitionMs={1000}
            enableAutoPlay={autoScroll}
            autoPlaySpeed={6000}
            enableMouseSwipe={false}
            onNextEnd={(item) => {
              if (item.index + noOfCards === products.length) {
                const timer = setTimeout(() => {
                  carouselRef.current.goTo(0);
                }, 5000);
                timerRef.current = timer;
              }
            }}
          >
            {products.map((item) => {
              return <FeaturedCard key={item.id} item={item} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
