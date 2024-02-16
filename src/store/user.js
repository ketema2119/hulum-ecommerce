import { produce } from 'immer';

export const SET_USER = 'setUser';
export const ADD_USER_NAME = 'addUserName';
export const REMOVE_USER_NAME = 'removeUserName';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return produce(state, (draftState) => {
        draftState.user = action.payload;
      });
    case ADD_USER_NAME:
      return produce(state, (draftState) => {
        draftState.username = action.payload;
      });
    case REMOVE_USER_NAME:
      return produce(state, (draftState) => {
        draftState.username = null;
      })
    default:
      return state;
  }
};

export default userReducer;
