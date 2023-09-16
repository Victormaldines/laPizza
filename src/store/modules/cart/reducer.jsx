import { toast } from 'react-toastify';

import * as types from '../types';

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCT: {
      const newState = { ...state };
      const newProduct = action.payload;
      let isAdded = false;

      newState.products.forEach((product) => {
        const auxProduct = { ...product };
        delete auxProduct.quantity;

        if (JSON.stringify(auxProduct) == JSON.stringify(newProduct)) {
          product.quantity++;
          isAdded = true;
        }
      });

      toast.success(`${newProduct.name} foi adicionada ao carrinho :)`);
      if (isAdded) return newState;

      newState.products.push({ ...newProduct, quantity: 1 });
      return newState;
    }

    case types.REMOVE_PRODUCT: {
      const newState = { ...state };
      const pizzaId = action.payload.id;

      newState.products.forEach((product, index) => {
        if (product.id === pizzaId) {
          if (product.quantity > 1) {
            product.quantity--;
          } else {
            newState.products.splice(index, 1);
          }
          toast.error(`${product.name} foi removida do carrinho`);
        }
      });

      return newState;
    }

    case types.REMOVE_ALL_PRODUCTS: {
      const newState = { products: [] };
      return newState;
    }

    default:
      return initialState;
  }
}
