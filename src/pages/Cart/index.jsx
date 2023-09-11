import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { formatPrice } from '../../utils/formatPrice';
import { CartContainer, CartSection, Product } from './styled';

export default function Cart() {
  const stateProducts = useSelector((state) => state.cart.products);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(() => [...stateProducts]);
  }, [stateProducts]);

  return (
    <CartContainer>
      <CartSection>
        {products.map((product, index) => (
          <Product className="product" key={index}>
            <span className="product-image">
              <img crossOrigin="true" src={product.photo} alt="image" />
            </span>
            <span className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-quantity">
                Quantidade: {product.quantity}
              </span>
              <span className="product-price">
                R$ {formatPrice(product.price)}
              </span>
            </span>
          </Product>
        ))}
        <span className="checkout">
          <span>
            Total: R$
            {formatPrice(
              products.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )
            )}
          </span>
          <span className="checkout-button">checkout</span>
        </span>
      </CartSection>
    </CartContainer>
  );
}
