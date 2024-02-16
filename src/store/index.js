import { combineReducers } from 'redux';
import variablesReducer, { SET_MODAL, SET_MAX_PRICE } from './variables';

import cartReducer, {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ITEM_QUANTITY,
} from './cart';

import userReducer, { SET_USER, ADD_USER_NAME, REMOVE_USER_NAME } from './user';
import favReducer, { ADD_FAV_ITEM, REMOVE_FAV_ITEM } from './favorites';

import messageReducer, {
  REMOVE_USER_MESSAGE,
  SET_USER_MESSAGE,
} from './message';

import productsReducer, { SET_PRODUCTS } from './products';

import filteredProductsReducer, {
  SET_FILTERED_PRODUCTS,
} from './filterd_products';

import sideBarReducer, { SET_CHECKBOX, SET_PRICE_RANGE } from './side_bar';
import searchTermReducer, { SET_SEARCH_TERM } from './search-term';

const rootReducer = combineReducers({
  variables: variablesReducer,
  sideBar: sideBarReducer,
  user: userReducer,
  cart: cartReducer,
  favorites: favReducer,
  message: messageReducer,
  products: productsReducer,
  filteredProducts: filteredProductsReducer,
  searchTerm: searchTermReducer,
});

export {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ITEM_QUANTITY,
  SET_USER,
  ADD_USER_NAME,
  REMOVE_USER_NAME,
  ADD_FAV_ITEM,
  REMOVE_FAV_ITEM,
  REMOVE_USER_MESSAGE,
  SET_USER_MESSAGE,
  SET_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  SET_CHECKBOX,
  SET_PRICE_RANGE,
  SET_SEARCH_TERM,
  //Variable Controllers
  SET_MODAL,
  SET_MAX_PRICE,
};

export default rootReducer;
