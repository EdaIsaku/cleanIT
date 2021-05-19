import { ADD_GARBAGE, SHOW_MODAL } from "./../types";

const INITIAL_STATE = {
  addGarbage: false,
  isModalVisible: false,
};

const toolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_GARBAGE:
      return {
        ...state,
        addGarbage: action.payload,
      };
    case SHOW_MODAL:
      return {
        ...state,
        isModalVisible: action.payload,
      };

    default:
      return state;
  }
};

export default toolsReducer;
