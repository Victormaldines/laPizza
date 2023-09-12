import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CartContainer, CartSection, Product, Title } from './styled';
import history from '../../services/history';
import axios from '../../services/axios';
import * as actions from '../../store/modules/cart/action';
import { formatPrice } from '../../utils/formatPrice';

export default function Cart() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const stateProducts = useSelector((state) => state.cart.products);

  const [products, setProducts] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    setProducts(() => [...stateProducts]);

    const calculateOrderPrice = () => {
      let price = stateProducts.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );

      setOrderPrice(price);
      return price;
    };

    calculateOrderPrice();
  }, [stateProducts]);

  const handleOrder = async () => {
    try {
      const { id } = user;
      const order = await axios.post(`/orders`, {
        customer_id: id,
        price: orderPrice,
      });

      console.log(order.data.id);

      products.forEach(async (product) => {
        await axios.post('/items', {
          quantity: product.quantity,
          product_id: product.id,
          order_id: order.data.id,
        });
      });

      dispatch(actions.removeAllProducts());
      history.push('/my-orders');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CartContainer>
      <CartSection>
        <Title>Meu carrinho</Title>
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
        {products.length > 0 ? (
          <span className="checkout">
            <span>
              Total: R$
              {formatPrice(orderPrice)}
            </span>
            <span className="checkout-button" onClick={handleOrder}>
              Fazer pedido
            </span>
          </span>
        ) : (
          <span> Você ainda não adicionou itens ao seu carrinho :( </span>
        )}
      </CartSection>
    </CartContainer>
  );
}
