const INITIAL_STATE = {
  addGarbage: false,
  cursor: "pointer"
};

const toolsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_GARBAGE":
      return {
        ...state,
        addGarbage: action.payload,
      };
    case "ADD_STYLE":
      return {
        ...state,
        cursor: action.payload,
      };

    default:
      return state;
  }
};

export default toolsReducer;
