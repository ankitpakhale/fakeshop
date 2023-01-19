import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer, // allProducts is the key --> we will use this key to access data from store
  product: selectedProductReducer, // product is the key --> we will use this key to access data from store
});

export default reducers;
