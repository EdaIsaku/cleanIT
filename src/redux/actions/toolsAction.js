export const addGarbage = (status) => {
  return {
    type: "ADD_GARBAGE",
    payload: status,
  };
};

export const addStyle = (change) => {
  return {
    type: "ADD_STYLE",
    payload: change,
  }
}

export default {addGarbage, addStyle}
