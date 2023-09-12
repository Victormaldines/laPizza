import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

import { MyInfoContainer, MyInfoSection, Title } from './styled';
import * as actions from '../../store/modules/auth/action';
import axios from '../../services/axios';
import history from '../../services/history';

export default function MyInformations() {
  const dispatch = useDispatch();

  const sysUser = useSelector((state) => state.auth);
  console.log(sysUser);
  const { id, name, user } = useSelector((state) => state.auth.user);
  const { isAdmin } = useSelector((state) => state.auth);

  const [isEditing, setIsEditing] = useState(false);
  const [localUser] = useState({ name, user });

  function handleNameChange(name) {
    localUser.name = name;
  }

  function handleUserChange(user) {
    localUser.user = user;
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
      localUser.user === user &&
      !localUser.password
    ) {
      handleCancelEdit();
      return;
    }
    try {
      if (isAdmin) {
        await axios.put(`/users/`, localUser, {
          headers: { Authorization: `Bearer ${sysUser.token}` },
        });
      } else {
        await axios.put(`/customers/${id}`, localUser);
      }

      setIsEditing(toggleIsEditing());
      dispatch(actions.loginFailure());
      history.push('/login');
    } catch (e) {
      console.log(e.response.data.errors);
    }
  }

  function handleCancelEdit() {
    setIsEditing(toggleIsEditing());
  }

  return (
    <MyInfoContainer>
      <MyInfoSection>
        <Title>Minhas informações</Title>
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
                  defaultValue={localUser.user}
                />
              ) : (
                localUser.user
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
