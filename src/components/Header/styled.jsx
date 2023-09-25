import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: rgba(0, 0, 0, 0.28);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  height: 10vh;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35vw;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  li,
  h1 {
    padding: 5px 10px;
    cursor: pointer;
  }

  li {
    transition: letter-spacing 0.1s ease-in;

    &:hover {
      letter-spacing: 1.5px;
    }
  }
`;

export const Logo = styled.span`
  cursor: pointer;
  & img {
    width: 150px;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  span {
    cursor: pointer;
    transition: letter-spacing 0.1s ease-in;

    &:hover {
      letter-spacing: 1.5px;
    }
  }

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 2em;
    padding: 10px 0;
    border: 1px solid red;
    border-radius: 10px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), black);
    width: 300px;
  }

  li {
    padding: initial;
    text-transform: initial;
    width: 80%;
    text-align: center;
    border-radius: 5px;
    transition: letter-spacing 0.1s ease-in;

    &:hover {
      font-weight: bold;
      letter-spacing: 1.3px;
    }

    &:active {
      letter-spacing: 1px;
    }
  }

  li + li {
    border-top: 1px solid rgba(255, 0, 0, 0.6);
  }

  li .list-link {
    display: block;
    padding: 15px;
  }

  .dropdown-open {
    display: flex;
  }
`;
