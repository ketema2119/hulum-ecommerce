import { produce } from 'immer';
import _ from 'lodash';
export const ADD_TO_CART = 'addToCart';
export const REMOVE_FROM_CART = 'removeFromCart';
export const SET_ITEM_QUANTITY = 'setItemQuantity';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = _.find(state, ({ product }) => {
        return product.id === action.payload.id;
      });
      if (!item) {
        return produce(state, (draftState) => {
          draftState.push({
            product: action.payload,
            quantity: 1,
          });
        });
      }
      return state;
    case REMOVE_FROM_CART:
      return state.filter(({ product }) => {
        return product.id !== action.payload.product.id;
      });
    case SET_ITEM_QUANTITY:
      return state.map((item) => {
        if (
          item.product.id === action.payload.product.id
        ) {
          return produce(item, (draftItem) => {
            draftItem.quantity = Number(action.payload.quantity);
          });
        }
        return item;
      });
    default:
      return state;
  }
};

export default cartReducer;
