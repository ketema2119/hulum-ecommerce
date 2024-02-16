

export const SET_FILTERED_PRODUCTS = 'setFilteredProducts';

const filteredProductsReducer = (state = [], action) => {
  switch(action.type) {
    case SET_FILTERED_PRODUCTS:
      return action.payload;
    default:
      return state;
  }

}

export default filteredProductsReducer;