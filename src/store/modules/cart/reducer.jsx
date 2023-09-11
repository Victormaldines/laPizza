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

      console.log(newProduct);
      console.log(newState, ' ADD_PRODUCT red');

      newState.products.forEach((product) => {
        const auxProduct = { ...product };
        delete auxProduct.quantity;

        if (JSON.stringify(auxProduct) == JSON.stringify(newProduct)) {
          product.quantity++;
          isAdded = true;
        }
      });
      if (isAdded) return newState;

      newState.products.push({ ...newProduct, quantity: 1 });
      return newState;
    }

    case types.REMOVE_PRODUCT: {
      const newState = { ...state };
      const pizzaId = action.payload.id;
      console.log(newState, ' REMOVE_PRODUCT red');
      newState.products.forEach((product, index) => {
        if (product.id === pizzaId) {
          console.log('found!', product);
          if (product.quantity > 1) {
            product.quantity--;
          } else {
            newState.products.splice(index, 1);
          }
        }
      });
      return newState;
    }

    default:
      return initialState;
  }
}
