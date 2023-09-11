import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaAngleDown } from 'react-icons/fa';

import { MyOrdersContainer, MyOrdersSection, Order, Product } from './styled';
import { formatDate } from '../../utils/formatDate';
import { translateStatus } from '../../utils/translateStatus';
import { formatPrice } from '../../utils/formatPrice';
import axios from '../../services/axios';

export default function MyOrder() {
  const user = useSelector((state) => state.auth.user);
  const mano = useSelector((state) => state.cart);
  console.log(mano, user);

  const products = useRef([]);
  const prevElement = useRef();
  const [orders, setOrders] = useState([]);
  const [loadedInfo, setLoadedInfo] = useState(-1);
  const [renderedProducts, setRenderedProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/customers/${user.id}`);
      setOrders(response.data['Orders']);
    }
    getData();
  }, [user]);

  const getProducts = (e, items, orderIndex) => {
    products.current = [];
    const element = e.target;

    if (element.classList.contains('info-active')) {
      element.classList.remove('info-active');
      prevElement.current = undefined;
      setLoadedInfo(-1);
      return;
    } else {
      element.classList.add('info-active');
    }

    if (prevElement.current !== undefined) {
      prevElement.current.classList.remove('info-active');
    }
    prevElement.current = element;

    setLoadedInfo(orderIndex);

    let hasProducts = false;
    let product;
    items.forEach(async (item, index) => {
      hasProducts = true;
      product = await axios.get(`/products/${item.product_id}`);
      products.current.push(product.data);
      if (items.length - 1 == index) {
        renderProducts(items, orderIndex);
      }
    });
    if (!hasProducts) {
      renderProducts();
    }
  };

  const renderProducts = (items) => {
    let productsArray = products.current.map((product, index) => (
      <Product className="product" key={index}>
        <span className="product-image">
          <img crossOrigin="true" src={products.current[index].Photos[0].url} />
        </span>
        <span className="product-info">
          <span className="product-name">{product.name}</span>
          <span className="product-quantity">
            Quantidade: {items[index].quantity}
          </span>
        </span>
      </Product>
    ));

    setRenderedProducts(productsArray);
  };

  return (
    <MyOrdersContainer>
      <MyOrdersSection>
        <span className="title">Meus Pedidos</span>
        <span>
          {orders.map((order, index) => (
            <Order key={index}>
              <span className="order-id"># {order.id}</span>
              <table>
                <thead>
                  <tr>
                    <th>Qtd. Pizzas</th>
                    <th>Data da compra</th>
                    <th>Status</th>
                    <th>Preço</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {order.Items.reduce(
                        (acc, item) => (acc += item.quantity),
                        0
                      )}
                    </td>
                    {/* Apparently the date isn't returning GMT-03 time zone */}
                    <td>{formatDate(`${order.created_at}`)}*</td>
                    <td className={'status ' + `${order.status}`}>
                      {translateStatus(order.status)}
                    </td>
                    <td>R$ {formatPrice(order.price)}</td>
                    <td
                      className="more-info"
                      onClick={(e) => getProducts(e, order.Items, index)}
                    >
                      <FaAngleDown />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="info">
                {index == loadedInfo ? renderedProducts : null}
              </div>
            </Order>
          ))}
        </span>
      </MyOrdersSection>
    </MyOrdersContainer>
  );
}
