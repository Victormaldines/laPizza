import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    background: black;
    background: url("/src/utils/images/pizza.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    list-style: none;
  }

`;

export const Container = styled.div`
  max-width: 80vw;
  height: 80vh;
  margin: 0 auto;

  .emphasis {
    font-weight: bold;
  }

  .button {
    border: 1px solid red;
    border-radius: 5px;
    padding: 12px;
    text-align: center;
    color: white;
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 0, 0.2)
    );
    transition: background 0.08s ease-in, letter-spacing 0.08s ease-in;
    cursor: pointer;
  }

  .button:hover {
    letter-spacing: 1.2px;
    background-color: rgba(255, 0, 0, 0.8);
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
