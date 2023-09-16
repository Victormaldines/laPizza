import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  RegisterContainer,
  RegisterSection,
  RegisterForm,
  RegisterTitle,
} from './styled';
import * as actions from '../../store/modules/auth/action';

export default function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = [];

    if (name.length < 3 || name.length > 255) {
      formErrors.push('Nome precisa ter entre 3 e 255 caracteres');
    }

    if (user.length < 3 || user.length > 50) {
      formErrors.push('Usuário precisa ter entre 3 e 50 caracteres');
    }

    if (password.length < 6 || password.length > 255) {
      formErrors.push('Senha precisa ter entre 6 e 255 caracteres');
    }

    if (formErrors.length > 0) {
      showErrors(formErrors);
      return;
    }

    try {
      dispatch(actions.registerRequest({ name, user, password }));
    } catch (e) {
      console.log(e);
    }
  };

  const showErrors = (errors) => {
    errors.forEach((error) => {
      toast.error(error);
    });
  };

  return (
    <RegisterContainer>
      <RegisterSection>
        <RegisterTitle>junte-se à nossa família</RegisterTitle>
        <RegisterForm>
          <span>
            <label>Nome </label>
            <input
              type="text"
              id="name"
              className="name"
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <span>
            <label>Usuário </label>
            <input
              type="text"
              id="user"
              className="user"
              onChange={(e) => setUser(e.target.value)}
            />
          </span>
          <span>
            <label>Senha </label>
            <input
              type="password"
              id="password"
              className="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <span>
            <button type="submit" onClick={handleSubmit}>
              Registre-se
            </button>
          </span>
        </RegisterForm>
      </RegisterSection>
    </RegisterContainer>
  );
}
