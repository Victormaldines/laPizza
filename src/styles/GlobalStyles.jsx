import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import * as colors from '../config/colors';

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
    color: white;
    background: black;
    background: url("/static/images/pizza.png");
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

export const Title = styled.span`
  font-size: 1.5em;
  margin: 50px 0;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & span {
    display: flex;
    flex-direction: column;

    & label {
      font-style: italic;
      font-weight: bold;
      font-size: 0.9em;
      margin-bottom: 1px;
    }

    & input {
      border: 1px solid #fff;
      border-radius: 3px;
      padding: 5px 10px;
      margin-bottom: 10px;
      font-size: 1em;

      &:focus {
        border: 1px dashed ${colors.red};
      }
    }

    & button {
      color: #fff;
      border: 1px solid #f00;
      border-radius: 3px;
      margin-top: 5px;
      padding: 7px 10px;
      background: linear-gradient(135deg, ${colors.red}, #f00);
      cursor: pointer;
      transition: letter-spacing 0.1s ease-in;

      &:hover {
        filter: brightness(110%);
        letter-spacing: 0.5px;
      }
    }
  }
`;
