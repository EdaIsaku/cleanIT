import { SET_CURRENT_USER, FROM_SIGN_UP } from "../types";

const INITIAL_STATE = {
  currentUser: null,
  fromSignUp: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case FROM_SIGN_UP:
      return {
        ...state,
        fromSignUp: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
