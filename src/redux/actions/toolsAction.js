export const addGarbage = (status) => {
  return {
    type: "ADD_GARBAGE",
    payload: status,
  };
};
