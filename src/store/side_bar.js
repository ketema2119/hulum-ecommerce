import { produce } from 'immer';

export const SET_CHECKBOX = 'setCheckboxStates';
export const SET_PRICE_RANGE = 'setPrice';

const initialState = {
  checkbox: [],
  priceRange: [0, 0],
};

const sideBarReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CHECKBOX:
      return produce(state, (draftState) => {
        draftState.checkbox = action.payload;
      })
    case SET_PRICE_RANGE:
      return produce(state, (draftState) => {
        draftState.priceRange = action.payload
      })
    default:
      return state;
  }
}


export default sideBarReducer;
