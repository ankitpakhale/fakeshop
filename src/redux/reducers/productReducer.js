import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Ankit",
      category: "Programmer",
    },
  ],
};

// this will always take 2 parameter i.e. state and action
// We are assigning state as initialState
export const productReducer = (state = initialState, action) => {
  // Here we are destructuring the action (2nd parameter) in type, payload
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
