import { useState, useEffect } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isFloat } from 'validator';

import { ProductContainer, ProductSection, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Product({ match }) {
  const user = useSelector((state) => state.auth);
  const id = get(match, 'params.id', '');

  const [photo, setPhoto] = useState('');
  const [formData] = useState(new FormData());
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
  }, [id]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const photoUrl = URL.createObjectURL(file);
    setPhoto(photoUrl);
    console.log(photo, photoUrl);

    formData.append('product_id', id);
    formData.append('photo', file);
    console.log(formData, 'b');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        console.log('updating...');
        await axios.put(`/products/${id}`, newProduct, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
      } else {
        console.log('creating...');
        if (
          !(
            newProduct.name &&
            newProduct.ingredients &&
            newProduct.description &&
            newProduct.price
          )
        ) {
          console.log('Preencha todos os campos');
          return;
        }
        let errors = [];

        if (newProduct.name.length < 3 || newProduct.name.length > 255) {
          errors.push('Nome precisa ter entre 3 e 255 caracteres');
        }
        if (
          newProduct.ingredients.length < 3 ||
          newProduct.ingredients.length > 1024
        ) {
          errors.push('Ingredientes precisa ter entre 3 e 1024 caracteres');
        }
        if (
          newProduct.description.length < 3 ||
          newProduct.ingredients.length > 1024
        ) {
          errors.push('Descrição precisa ter entre 3 e 1024 caracteres');
        }
        if (!isFloat(newProduct.price)) {
          errors.push('Preço precisa ser um valor real');
        }

        if (errors.length > 0) {
          showErrors(errors);
          return;
        }

        const { data } = await axios.post('/products', newProduct);
        console.log('a');
        history.push(`/product/${data.id}/edit`);
        console.log('b');
        return;
      }

      if (formData.get('product_id')) {
        console.log('updating...');
        await axios.post('photos', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
    } catch (e) {
      console.log(e);
    }

    history.push('/menu');
  };

  function showErrors(errors) {
    errors.forEach((error) => {
      console.log(error);
    });
  }

  return (
    <ProductContainer>
      <ProductSection>
        <h1>{id ? 'Atualizar Pizza' : 'Adicionar Pizza'}</h1>
        <Form onSubmit={handleSubmit}>
          {id ? (
            <span className="image">
              <label htmlFor="photo">
                {photo ? (
                  <span>
                    <img crossOrigin="true" src={photo} alt="product"></img>
                  </span>
                ) : (
                  <span>
                    <FaUtensils />
                  </span>
                )}
                <input
                  type="file"
                  id="photo"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleChange}
                />
              </label>
            </span>
          ) : null}

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
