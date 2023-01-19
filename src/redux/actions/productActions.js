import { ActionTypes } from "../constants/action-types";

// Below line is the Action,
// Action always returns the object which has the key as type and payload
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS, // the type of the action we want to perform
    payload: products, // this is the data that we are getting
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
