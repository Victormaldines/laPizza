import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

import { LoginContainer, LoginSection, LoginTitle, LoginForm } from './styled';
import * as actions from '../../store/modules/auth/action';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formHaveErrors()) return;

    dispatch(actions.loginRequest({ user, password, prevPath }));
  };

  const formHaveErrors = () => {
    let formErrors = [];

    if (user.length < 3 || user.length > 50) {
      formErrors.push('Usuário precisa ter entre 3 e 50 caracteres');
    }

    if (password.length < 6 || password.length > 255) {
      formErrors.push('Senha precisa ter entre 6 e 255 caracteres');
    }

    if (formErrors.length > 0) {
      showErrors(formErrors);
      return true;
    }
    return false;
  };

  const showErrors = (errors) => {
    errors.forEach((error) => toast.error(error));
  };

  return (
    <LoginContainer>
      <LoginSection>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <span>
            <label htmlFor="user">Usuário</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              id="user"
              placeholder="insira seu usuário"
            />
          </span>
          <span>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="insira sua senha"
            />
          </span>
          <span>
            <button type="submit">Entrar</button>
            <span className="register">
              Não possui uma conta? <Link to="/register">Registre-se aqui</Link>
            </span>
          </span>
        </LoginForm>
      </LoginSection>
    </LoginContainer>
  );
}
