import * as types from '../types';

export function addProduct(payload) {
  return {
    type: types.ADD_PRODUCT,
    payload,
  };
}

export function removeProduct(payload) {
  return {
    type: types.REMOVE_PRODUCT,
    payload,
  };
}

export function removeAllProducts(payload) {
  return {
    type: types.REMOVE_ALL_PRODUCTS,
    payload,
  };
}
