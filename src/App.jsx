import React, {useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_PRODUCTS } from './middlewares';

import {
  SET_CHECKBOX,
  SET_MAX_PRICE,
  SET_PRICE_RANGE,
  SET_USER,
  ADD_USER_NAME,
} from './store';

import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import { Message, ProductDetailNavigator, ScrollToTop } from './components';
import { Landing, Products, Login, Register } from './views';
import { Header } from './sections';
import URLs from './URLs';
import _ from 'lodash';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector((state) => state.products);

  React.useEffect(() => {
    dispatch({ type: REQUEST_PRODUCTS });
    console.log('product requested');

  }, []);

  
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: SET_USER, payload: user });
      if (_.isEmpty(user)) {
        localStorage.setItem('username', '');
      } else {
        dispatch({
          type: ADD_USER_NAME,
          payload: localStorage.getItem('username'),
        });
      }
    });
  }, []);


  //getting the items count by category for sidebar filter and getting maxprice for price slider
  useEffect(() => {
    let maxPrice = 0;
    const counts = products.reduce((acc, item) => {
      if (maxPrice < item.price) maxPrice = item.price;

      const index = _.findIndex(acc, (product) => {
        return product.cat_title === item.category;
      });

      if (index > -1) acc[index]['size']++;
      else acc.push({ cat_title: item.category, size: 1, checked: false });
      return acc;
    }, []);

    console.log('while products change!');
    dispatch({ type: SET_CHECKBOX, payload: counts });
    dispatch({ type: SET_MAX_PRICE, payload: maxPrice });
    dispatch({ type: SET_PRICE_RANGE, payload: [0, maxPrice] });
  }, [products]);

  
  return (
    <>
      <Message />
      <Header />
      <AnimatePresence>
        <ScrollToTop>
          <Routes location={location} key={location.pathname}>
            <Route path={URLs.home} element={<Landing />} />
            <Route path={URLs.register} element={<Register />} />
            <Route path={URLs.signIn} element={<Login />} />
            <Route path={URLs.products} element={<Products />} />
            <Route
              path={`${URLs.productDetail}/:product_id`}
              element={<ProductDetailNavigator />}
            />
          </Routes>
        </ScrollToTop>
      </AnimatePresence>
    </>
  );
}

export default App;
