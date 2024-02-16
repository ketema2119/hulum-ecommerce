import React from 'react';
import { CategoryLists, PriceSlider } from '../components';
import { GrayStar, GoldStar } from '../assets/images';
import { useSelector, useDispatch } from 'react-redux';
import { SET_FILTERED_PRODUCTS } from '../store';
import { useEffect } from 'react';
import _ from 'lodash';

function SideBar() {
  const itemAmounts = [8500, 400, 320, 200, 20];
  const products = useSelector((state) => state.products);
  const checkboxes = useSelector((state) => state.sideBar.checkbox);
  const priceRange = useSelector((state) => state.sideBar.priceRange);
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  const stars = (rating) => {
    return _.range(5).map((index) => {
      if (index + 1 <= rating)
        return <img src={GoldStar} key={index} alt='gold star' />;
      return <img src={GrayStar} alt='gray star' key={index} />;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getFilteredProducts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [checkboxes, priceRange, searchTerm]);

  const getFilteredProducts = () => {
    let filteredProducts;
    const isThereChecked = checkboxes.find((checkbox) => {
      return checkbox.checked;
    });

    if (isThereChecked) {
      // filter products based on their category.
      const filteredByCategory = products.filter((item) => {
        const currentCategory = checkboxes.find((checkbox) => {
          return checkbox.cat_title === item.category;
        });
        return (
          currentCategory.checked && item.category === currentCategory.cat_title
        );
      });

      filteredProducts = filteredByCategory;
    } else {
      filteredProducts = products;
    }

    // filter products based on the price range set.
    const filteredByPrice = filteredProducts.filter((item) => {
      return item.price >= priceRange[0] && item.price <= priceRange[1];
    });
    // filter products based on the search term.
    const filteredBySearchTerm = filteredByPrice.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    dispatch({ type: SET_FILTERED_PRODUCTS, payload: filteredBySearchTerm });
  };

  return (
    <div className='side-bar'>
      <CategoryLists />
      <PriceSlider />
      <div className='rating-view'>
        <div className='title'>RATING</div>
        <div className='rating-lists'>
          {[...Array(5).keys()].map((index) => {
            return (
              <div className='rating-row' key={index}>
                <div className='wrapper'>
                  <div className='stars'>{stars(5 - index)}</div>
                  <div> & Up</div>
                </div>
                <div className='item-amounts'>{itemAmounts[index]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
