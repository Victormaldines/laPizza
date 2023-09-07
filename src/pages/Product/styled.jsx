import styled from 'styled-components';

import { Container, Section } from '../../styles/GlobalStyles';

export const ProductContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
`;

export const ProductSection = styled(Section)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(5px);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);

  max-height: 80vh;

  h1 {
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    & img {
      width: 200px;
      height: 200px;
      cursor: pointer;
      transition: filter 0.1s linear;

      &:hover {
        filter: brightness(105%);
      }
    }

    &:has(> svg) {
      border: 1px solid white;
      background-color: black;
    }

    svg {
      color: rgba(255, 255, 255, 0.9);
      font-size: 40px;
    }

    & input[type='file'] {
      display: none;
    }
  }

  .info {
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 40px;

      input[type='text'],
      input[type='number'],
      textarea {
        margin-left: 20px;
        padding: 5px;
        border: 1px solid white;
        border-radius: 5px;
      }

      textarea {
        min-width: 188px;
        min-height: 60px;
        width: 188px;
        max-width: 188px;
        max-height: 100px;

        &::-webkit-scrollbar {
          width: 0.5em;
        }

        &::-webkit-scrollbar-thumb {
          background-color: gray;
          border-radius: 5px;
        }
      }

      button {
        width: 100%;
        padding: 8px;
        background: linear-gradient(
          135deg,
          rgba(255, 0, 0, 1),
          rgba(0, 0, 0, 0.4)
        );
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 1px;
      }
    }

    span + span {
      margin-top: 10px;
    }
  }
`;
