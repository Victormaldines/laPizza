import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { CartContainer, CartSection, Product, CartTitle } from './styled';
import history from '../../services/history';
import axios from '../../services/axios';
import * as actions from '../../store/modules/cart/action';
import { formatPrice } from '../../utils/scripts/formatPrice';
import getFirstName from '../../utils/scripts/getFirstName';

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

      appendProductsToOrder(products, order);

      dispatch(actions.removeAllProducts());
      toast.success(
        `Uma ótima pedida, ${getFirstName(
          user.name
        )}! Seu pedido chegará em breve :)`
      );
      history.push('/my-orders');
    } catch (e) {
      console.log(e);
    }
  };

  const appendProductsToOrder = (products, order) => {
    products.forEach(async (product) => {
      await axios.post('/items', {
        quantity: product.quantity,
        product_id: product.id,
        order_id: order.data.id,
      });
    });
  };

  return (
    <CartContainer>
      <CartSection>
        <CartTitle>Meu carrinho</CartTitle>
        {products.map((product, index) => (
          <Product className="product" key={index}>
            <span className="product-image">
              <img
                crossOrigin="true"
                src={product.photo ? product.photo : ''}
                alt={product.name}
              />
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
            <span className="checkout-button button" onClick={handleOrder}>
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
