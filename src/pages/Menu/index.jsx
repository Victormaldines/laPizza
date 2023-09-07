import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaPlus, FaMinus, FaEdit } from 'react-icons/fa';
import { formatPrice } from '../../utils/formatPrice';
import { Link } from 'react-router-dom';

import {
  MenuContainer,
  PizzaSection,
  Title,
  Pizzas,
  Pizza,
  Image,
  Info,
} from './styled';
import axios from '../../services/axios';

export default function Menu() {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/products');
      setPizzas(response.data);
    }
    getData();
  }, []);

  return (
    <MenuContainer>
      <PizzaSection>
        <Title>Menu</Title>
        {isAdmin ? (
          <span>
            <FaPlus /> Adicionar Pizza
          </span>
        ) : (
          ''
        )}
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
                  </span>
                ) : (
                  <span className="buttons">
                    <span className="plus-button">
                      <FaPlus size={12} />
                    </span>
                    <span className="minus-button">
                      <FaMinus size={12} />
                    </span>
                  </span>
                )}
              </Info>
            </Pizza>
          ))}
        </Pizzas>
      </PizzaSection>
    </MenuContainer>
  );
}
