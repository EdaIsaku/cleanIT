import { ADD_GARBAGE, SHOW_MODAL } from "../types";

export const addGarbage = (status) => {
  return {
    type: ADD_GARBAGE,
    payload: status,
  };
};

export const showModal = (status) => {
  return {
    type: SHOW_MODAL,
    payload: status,
  };
};
