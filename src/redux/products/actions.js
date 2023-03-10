import {
  ADD_PRODUCT,
  ADD_TO_CART,
  DECREASE,
  DELETE,
  INCREASE,
} from "./actionTypes";

export const addProduct = (products) => {
  return {
    type: ADD_PRODUCT,
    payload: products,
  };
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const increase = (productId) => ({
  type: INCREASE,
  payload: productId,
});

export const decrease = (productId) => ({
  type: DECREASE,
  payload: productId,
});

export const deleteCart = (product) => ({
  type: DELETE,
  payload: product,
});
