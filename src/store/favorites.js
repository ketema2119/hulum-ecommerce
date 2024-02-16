import { produce } from 'immer';

export const ADD_FAV_ITEM = 'addFavoriteItem';

export const REMOVE_FAV_ITEM = 'removeFavoriteItem';

const favReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAV_ITEM:
      return produce(state, (draftState) => {
        draftState.push(action.payload);
      });
    case REMOVE_FAV_ITEM:
      return state.filter((item) => item.product_id !== action.payload);
    default:
      return state;
  }
};

export default favReducer;
