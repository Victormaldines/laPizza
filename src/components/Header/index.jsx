import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import * as actions from '../../store/modules/auth/action';
import { Nav, Logo, Dropdown } from './styled';

export const Header = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function logout() {
    dispatch(actions.loginFailure());
  }

  return (
    <>
      <Nav>
        <ul>
          <Link to="/menu">
            <li>Cardápio</li>
          </Link>
        </ul>
        <Link to="/">
          <Logo>
            <img src="/src/utils/images/lightLaPizza.svg"></img>
          </Logo>
        </Link>
        <ul>
          {isLoggedIn ? (
            <Dropdown>
              <span onClick={toggleDropdown}>Minha conta</span>
              <ul className={isDropdownOpen ? 'dropdown-open' : ''}>
                {console.log(isAdmin)}
                {isAdmin ? (
                  <></>
                ) : (
                  <>
                    <li>
                      <Link className="list-link" to="/cart">
                        <FaShoppingCart /> Carrinho
                      </Link>
                    </li>
                    <li>
                      <Link className="list-link" to="/my-orders">
                        Meus pedidos
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link className="list-link" to="/my-info">
                    Minhas informações
                  </Link>
                </li>
                <li onClick={logout}>
                  <Link className="list-link" to="">
                    Sair
                  </Link>
                </li>
              </ul>
            </Dropdown>
          ) : (
            <Link to="/login">
              <li>Login</li>
            </Link>
          )}
        </ul>
      </Nav>
    </>
  );
};
