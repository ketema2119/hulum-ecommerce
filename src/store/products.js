export const SET_PRODUCTS = 'setProducts';


const productsReducer = (state = [], action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
}

export default productsReducer;