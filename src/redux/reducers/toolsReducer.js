const INITIAL_STATE = {
  addGarbage: false,
};

const toolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_GARBAGE":
      return {
        ...state,
        addGarbage: action.payload,
      };

    default:
      return state;
  }
};

export default toolsReducer;
