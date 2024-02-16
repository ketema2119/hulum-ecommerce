import produce from 'immer';

export const SET_MODAL = 'setModal';
export const SET_MAX_PRICE = 'setMaxPrice';


const initState = {
  modal: false,
  maxPrice: 0
};

const variablesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return produce(state, (draftState) => {
        draftState.modal = action.payload;
      });
    case SET_MAX_PRICE:
      return produce(state, (draftState) => {
        draftState.maxPrice = action.payload;
      })
    default:
      return state;
  }
};

export default variablesReducer;
