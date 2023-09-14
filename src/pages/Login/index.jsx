import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

import { LoginContainer, LoginSection, Title, Form } from './styled';
import * as actions from '../../store/modules/auth/action';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (user.length < 3 || user.length > 50) {
      formErrors = true;
      toast.error('Usuário precisa ter entre 3 e 50 caracteres');
    }

    if (password.length < 6 || password.length > 255) {
      formErrors = true;
      toast.error('Senha precisa ter entre 6 e 255 caracteres');
    }

    if (formErrors) return;
    dispatch(actions.loginRequest({ user, password, prevPath }));
  };

  return (
    <LoginContainer>
      <LoginSection>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
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
        </Form>
      </LoginSection>
    </LoginContainer>
  );
}
