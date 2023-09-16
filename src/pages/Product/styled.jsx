import styled from 'styled-components';

import { Container, Section } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const ProductContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ProductSection = styled(Section)`
  display: flex;
  flex-direction: column;

  padding: 40px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    ${colors.gradientBlackStart},
    ${colors.gradientBlackEnd}
  );
  backdrop-filter: blur(5px);
  box-shadow: 2px 2px 5px ${colors.blackShadow};
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
    margin-right: 40px;
    border-radius: 50%;
    box-shadow: 2px 2px 10px ${colors.blackShadow};
    overflow: hidden;

    & img {
      width: 200px;
      height: 200px;
      transition: filter 0.1s linear;

      &:hover {
        filter: brightness(105%);
      }
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: #000;
      cursor: pointer;
    }

    svg {
      color: white;
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

      input[type='text'],
      input[type='number'],
      textarea {
        margin-left: 20px;
        padding: 5px;
        border: 1px solid #fff;
        border-radius: 5px;

        &:focus {
          border: 1px dashed ${colors.red};
        }
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
          background-color: #777;
          border-radius: 5px;
        }
      }

      button {
        width: 100%;
        padding: 8px;
        background: linear-gradient(
          135deg,
          ${colors.red},
          ${colors.gradientRedEnd}
        );
        box-shadow: 2px 2px 5px ${colors.blackShadow};
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 1px;
        transition: filter 0.07s ease-in, box-shadow 0.07s ease-in;

        &:active {
          filter: brightness(130%);
          box-shadow: none;
        }
      }
    }

    span + span {
      margin-top: 10px;
    }
  }
`;
