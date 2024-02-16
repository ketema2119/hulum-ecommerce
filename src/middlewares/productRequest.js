import axios from "axios";
import { SET_PRODUCTS } from '../store';

export const REQUEST_PRODUCTS = 'loadProductsApi';


const makeProductRequest = store => next => action => {
  switch(action.type) {
    case REQUEST_PRODUCTS:
      const reqest = axios.get('https://fakestoreapi.com/products');
      next({type: SET_PRODUCTS, payload: reqest});
      break;
    default:
      next(action);
  }
}

export default makeProductRequest;