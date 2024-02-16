import produce from 'immer';

export const SET_USER_MESSAGE = 'setLoginMessage';
export const REMOVE_USER_MESSAGE = 'removeRegisterMessage';

const initialState = {
  user: null,
  main: null,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_MESSAGE:
      return produce(state, (draftState) => {
        draftState.user = action.payload;
      });
    case REMOVE_USER_MESSAGE:
      return produce(state, (draftState) => {
        draftState.user = null;
      });
    default:
      return state;
  }
};

export default messageReducer;
