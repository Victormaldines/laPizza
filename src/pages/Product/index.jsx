import { useState, useEffect } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { ProductContainer, ProductSection, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Product({ match }) {
  const user = useSelector((state) => state.auth);
  const id = get(match, 'params.id', '');

  const [photo, setPhoto] = useState({});
  const [product, setProduct] = useState({});
  const [newProduct, setNewProduct] = useState({});

  useEffect(() => {
    async function getProductData() {
      const { data } = await axios.get(`/products/${id}`);

      const Photo = get(data, 'Photos[0].url', '');
      setPhoto(Photo);

      setProduct((product) => ({ ...product, ...data }));
    }
    getProductData();
  }, [id, product]);

  const handleSubmit = async (e) => {
    console.log(user, id);
    e.preventDefault();
    if (id) {
      await axios.put(`/products/${id}`, newProduct, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
    }

    history.push('/menu');
  };

  return (
    <ProductContainer>
      <ProductSection>
        <h1>Atualizar Pizza</h1>
        <Form onSubmit={handleSubmit}>
          <span className="image">
            {photo ? (
              <label htmlFor="photo">
                <img crossOrigin="true" src={photo} alt="product"></img>
                <input type="file" id="photo" accept=".png, .jpg, .jpeg" />
              </label>
            ) : (
              <FaUtensils />
            )}
          </span>

          <span className="info">
            <span>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="nome"
                defaultValue={product.name}
                onChange={(e) => {
                  setNewProduct((product) => ({
                    ...product,
                    name: e.target.value,
                  }));
                }}
              />
            </span>

            <span>
              <label htmlFor="ingredients">Ingredientes</label>
              <textarea
                type="text"
                id="ingredients"
                placeholder="ingredientes"
                defaultValue={product.ingredients}
                onChange={(e) => {
                  setNewProduct((product) => ({
                    ...product,
                    ingredients: e.target.value,
                  }));
                }}
              />
            </span>

            <span>
              <label htmlFor="description">Descrição</label>
              <textarea
                type="text"
                id="description"
                placeholder="descrição"
                defaultValue={product.description}
                onChange={(e) => {
                  setNewProduct((product) => ({
                    ...product,
                    description: e.target.value,
                  }));
                }}
              />
            </span>

            <span>
              <label htmlFor="price">Preço</label>
              <input
                type="number"
                id="price"
                min="0"
                placeholder="preço"
                defaultValue={product.price}
                onChange={(e) => {
                  setNewProduct((product) => ({
                    ...product,
                    price: e.target.value,
                  }));
                }}
              />
            </span>

            <span>
              <button type="submit" className="button">
                Confirmar
              </button>
            </span>
          </span>
        </Form>
      </ProductSection>
    </ProductContainer>
  );
}

Product.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
