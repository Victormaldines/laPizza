import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { MyInfoContainer, MyInfoSection, MyInfoTitle } from './styled';
import * as actions from '../../store/modules/auth/action';
import axios from '../../services/axios';
import history from '../../services/history';

export default function MyInformations() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  const { id, name, username } = useSelector((state) => state.auth.user);
  const { isAdmin } = useSelector((state) => state.auth);

  const [isEditing, setIsEditing] = useState(false);
  const [localUser] = useState({ name, username });

  function handleNameChange(name) {
    localUser.name = name;
  }

  function handleUserChange(username) {
    localUser.username = username;
  }

  function handlePasswordChange(password) {
    localUser.password = password;
  }

  function handleEdit() {
    setIsEditing(toggleIsEditing());
  }

  function toggleIsEditing() {
    return !isEditing;
  }

  async function handleConfirmEdit() {
    if (
      localUser.name === name &&
      localUser.username === username &&
      !localUser.password
    ) {
      handleCancelEdit();
      return;
    }
    try {
      if (isAdmin) {
        await axios.put(`/users/`, localUser, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
      } else {
        await axios.put(`/customers/${id}`, localUser);
      }

      setIsEditing(toggleIsEditing());
      dispatch(actions.loginFailure());
      toast.success(
        'Dados atualizados com sucesso! Por favor, logue-se novamente'
      );
      history.push('/login');
    } catch (e) {
      toast.error('Usuário escolhido já está em uso :(');
      console.log(e.response.data.errors);
    }
  }

  function handleCancelEdit() {
    setIsEditing(toggleIsEditing());
  }

  return (
    <MyInfoContainer>
      <MyInfoSection>
        <MyInfoTitle>Minhas informações</MyInfoTitle>
        <span>
          <label>Nome</label>
          <span className="data-group">
            <span className="user-data">
              {isEditing ? (
                <input
                  type="text"
                  onChange={(e) => handleNameChange(e.target.value)}
                  defaultValue={localUser.name}
                />
              ) : (
                localUser.name
              )}
            </span>
          </span>
        </span>
        <span>
          <label>Usuário</label>
          <span className="data-group">
            <span className="user-data">
              {isEditing ? (
                <input
                  type="text"
                  onChange={(e) => handleUserChange(e.target.value)}
                  defaultValue={localUser.username}
                />
              ) : (
                localUser.username
              )}
            </span>
          </span>
        </span>
        <span>
          <label>Senha</label>
          <span className="data-group">
            <span className="user-data">
              {isEditing ? (
                <input
                  type="password"
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  defaultValue=""
                />
              ) : (
                '*********'
              )}
            </span>
          </span>
          {isEditing ? (
            <span className="editing-buttons">
              <button className="button-confirm" onClick={handleConfirmEdit}>
                <FaCheck />
              </button>
              <button className="button-cancel" onClick={handleCancelEdit}>
                <FaTimes />
              </button>
            </span>
          ) : (
            <span>
              <button className="button-edit" onClick={handleEdit}>
                <FaEdit />
              </button>
            </span>
          )}
        </span>
      </MyInfoSection>
    </MyInfoContainer>
  );
}
