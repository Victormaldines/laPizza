import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaAngleDown } from 'react-icons/fa';

import {
  MyOrdersContainer,
  MyOrdersSection,
  MyOrdersTitle,
  Order,
  Product,
} from './styled';
import { formatDate } from '../../utils/scripts/formatDate';
import { translateStatus } from '../../utils/scripts/translateStatus';
import { formatPrice } from '../../utils/scripts/formatPrice';
import axios from '../../services/axios';

export default function MyOrder() {
  const user = useSelector((state) => state.auth.user);

  const products = useRef([]);
  const prevElement = useRef();
  const [orders, setOrders] = useState([]);
  const [loadedInfo, setLoadedInfo] = useState(-1);
  const [renderedProducts, setRenderedProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/customers/${user.id}`);
        setOrders(response.data['Orders']);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, [user]);

  const getProducts = (e, items, orderIndex) => {
    resetProducts();
    const element = e.target;

    selectProductToLoad(element, orderIndex);

    let hasProducts = false;
    let product;
    try {
      items.forEach(async (item, index) => {
        if (item.product_id) {
          hasProducts = true;
          const { data } = await axios.get(`/products/${item.product_id}`);
          product = data;
        } else {
          product = { name: 'Pizza removida', Photos: [undefined] };
        }
        products.current.push(product);
        if (items.length - 1 == index) {
          renderProducts(items, orderIndex);
        }
      });
      if (!hasProducts) {
        renderProducts();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const resetProducts = () => {
    products.current = [];
  };

  const selectProductToLoad = (element, orderIndex) => {
    if (hasClass(element, 'info-active')) {
      removeClass(element, 'info-active');
      prevElement.current = undefined;
      setLoadedInfo(-1);
      return;
    } else {
      addClass(element, 'info-active');
    }

    if (prevElement.current !== undefined) {
      removeClass(prevElement.current, 'info-active');
    }
    prevElement.current = element;

    setLoadedInfo(orderIndex);
  };

  const hasClass = (element, htmlClass) => {
    return element.classList.contains(htmlClass);
  };

  const addClass = (element, htmlClass) => {
    element.classList.add(htmlClass);
  };

  const removeClass = (element, htmlClass) => {
    element.classList.remove(htmlClass);
  };

  const renderProducts = (items) => {
    let productsArray = products.current.map((product, index) => {
      const productPhoto = checkProductHasPhoto(products.current[index]);
      return (
        <Product className="product" key={index}>
          <span className="product-image">
            <img crossOrigin="true" src={productPhoto} />
          </span>
          <span className="product-info">
            <span className="product-name">{product.name}</span>
            <span className="product-quantity">
              Quantidade: {items[index].quantity}
            </span>
          </span>
        </Product>
      );
    });

    setRenderedProducts(productsArray);
  };

  const checkProductHasPhoto = (product) => {
    return product.Photos[0] === undefined
      ? 'https://i.ibb.co/yQB62bX/utensils.png'
      : product.Photos[0].url;
  };

  return (
    <MyOrdersContainer>
      <MyOrdersSection>
        <MyOrdersTitle>Meus pedidos</MyOrdersTitle>
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
                    <td>{formatDate(`${order.created_at}`)}</td>
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
