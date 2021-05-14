const INITIAL_STATE = {
  addGarbage: false,
  showModal: false,
};

const toolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_GARBAGE":
      return {
        ...state,
        addGarbage: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: action.payload,
      };

    default:
      return state;
  }
};

export default toolsReducer;
