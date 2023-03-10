import { combineReducers } from "redux";
// import cartsReducer from "./carts/reducer";
import productsReducer from "./products/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  //carts: cartsReducer,
});

export default rootReducer;
