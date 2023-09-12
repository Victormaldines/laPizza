import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  FaPlus,
  FaMinus,
  FaEdit,
  FaTimes,
  FaExclamation,
} from 'react-icons/fa';
import { formatPrice } from '../../utils/formatPrice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  MenuContainer,
  PizzaSection,
  Title,
  Pizzas,
  Pizza,
  Image,
  Info,
} from './styled';
import * as actions from '../../store/modules/cart/action';
import axios from '../../services/axios';

export default function Menu() {
  const dispatch = useDispatch();

  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const userToken = useSelector((state) => state.auth.token);
  console.log(userToken);

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/products');
      setPizzas(response.data);
      // renderButtons();
    }
    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();

    const exclamation = e.currentTarget.nextSibling;
    exclamation.style.display = 'flex';

    e.currentTarget.remove();
  };

  const handleDelete = async (e, index, pizzaId) => {
    try {
      console.log(userToken);
      await axios.delete(`/products/${pizzaId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      const newPizzas = [...pizzas];
      newPizzas.splice(index, 1);
      setPizzas(newPizzas);
    } catch (e) {
      console.log(e.response.data.errors[0]);
    }
  };

  const handleAddProduct = (pizza) => {
    dispatch(
      actions.addProduct({
        id: pizza.id,
        photo: pizza.Photos[0].url,
        name: pizza.name,
        price: pizza.price,
      })
    );
  };

  const handleRemoveProduct = (pizzaId) => {
    dispatch(actions.removeProduct({ id: pizzaId }));
  };

  return (
    <MenuContainer>
      <PizzaSection>
        <Title>Menu</Title>
        {isAdmin ? (
          <span className="add-pizza">
            <Link to="/product" className="button">
              <FaPlus /> Adicionar Pizza
            </Link>
          </span>
        ) : null}
        <Pizzas>
          {pizzas.map((pizza, index) => (
            <Pizza
              key={index}
              id={pizza.id}
              className={index % 2 == 0 ? '' : 'reverse'}
            >
              <Image>
                <img
                  crossOrigin="true"
                  src={pizza.Photos[0] !== undefined ? pizza.Photos[0].url : ''}
                  alt={pizza.name}
                ></img>
              </Image>
              <Info className="pizza-info">
                <span className="pizza-name">{pizza.name}</span>
                <span className="pizza-ingredients">{pizza.ingredients}</span>
                <span className="pizza-description">{pizza.description}</span>
                <span className="pizza-price">
                  <span className="currency">R$</span>{' '}
                  <span className="price">{formatPrice(pizza.price)}</span>
                </span>

                {isAdmin ? (
                  <span className="buttons">
                    <Link
                      className="edit-button"
                      to={`/product/${pizza.id}/edit`}
                    >
                      <FaEdit size={12} />
                    </Link>
                    <Link
                      className="remove-button"
                      onClick={handleDeleteAsk}
                      to={`/products/${pizza.id}/delete`}
                    >
                      <FaTimes size={12} />
                    </Link>
                    <span
                      className="alert-button"
                      onClick={(e) => handleDelete(e, index, pizza.id)}
                    >
                      <FaExclamation size={12} />
                    </span>
                  </span>
                ) : userToken ? (
                  <span className="buttons">
                    <span
                      className="plus-button"
                      onClick={() => {
                        handleAddProduct(pizza);
                      }}
                    >
                      <FaPlus size={12} />
                    </span>
                    <span
                      className="remove-button"
                      onClick={() => {
                        handleRemoveProduct(pizza.id);
                      }}
                    >
                      <FaMinus size={12} />
                    </span>
                  </span>
                ) : null}
              </Info>
            </Pizza>
          ))}
        </Pizzas>
      </PizzaSection>
    </MenuContainer>
  );
}
