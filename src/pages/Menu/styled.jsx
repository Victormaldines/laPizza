import styled from 'styled-components';

import { Container, Section } from '../../styles/GlobalStyles';

export const MenuContainer = styled(Container)`
  padding: 20px 0;
  color: white;
`;

export const PizzaSection = styled(Section)`
  flex-direction: column;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);

  .add-pizza a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    font-size: 0.9em;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    border: 1px solid rgb(255, 0, 0);
    background: linear-gradient(135deg, #8e0101, rgb(200, 0, 0));

    svg {
      font-size: 0.8em;
      margin-right: 10px;
    }
  }

  .button:hover {
    letter-spacing: initial;
    background: linear-gradient(135deg, #b10909, rgb(230, 0, 0));
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.span`
  font-size: 2.5em;
  margin: 50px 0;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 10px;
`;

export const Pizzas = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50vw;

  .reverse {
    flex-direction: row-reverse;

    .pizza-info {
      align-items: flex-end;
    }
  }
`;

export const Pizza = styled.section`
  display: flex;
  justify-content: space-around;
  height: 20vw;
`;

export const Image = styled(Section)`
  width: 25vw;

  img,
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
    width: 13vw;
    height: 13vw;
    border-radius: 50%;

    & svg {
      font-size: 40px;
    }
  }
`;

export const Info = styled(Section)`
  width: 25vw;
  align-items: flex-start;
  flex-direction: column;

  .pizza-name {
    font-size: 1.8em;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .pizza-ingredients {
    font-size: 0.9em;
    font-style: italic;
    margin-bottom: 5px;
  }

  .pizza-description {
    margin-bottom: 10px;
  }

  .pizza-price {
    margin-bottom: 10px;

    .currency {
      font-weight: bold;
    }

    .price {
      font-style: italic;
    }
  }

  .buttons {
    display: flex;
  }

  .buttons span,
  .buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: filter 0.07s ease-in, box-shadow 0.07s ease-in;

    &.plus-button {
      color: white;
      border: 1px solid rgb(0, 255, 0);
      background: linear-gradient(135deg, #018e42, rgb(0, 255, 0));
    }

    &.remove-button {
      margin-left: 10px;
      color: white;
      border: 1px solid rgb(255, 0, 0);
      background: linear-gradient(135deg, #8e0101, rgb(255, 0, 0));
    }

    &.edit-button {
      border: 1px solid rgb(255, 255, 0);
      background: linear-gradient(135deg, #8e8c01, rgb(255, 255, 0));
    }

    &.alert-button {
      display: none;
      margin-left: 10px;
      border: 1px solid rgb(255, 123, 0);
      background: linear-gradient(135deg, #8e4501, rgb(255, 123, 0));
    }

    &:hover {
      filter: brightness(110%);
    }

    &:active {
      filter: brightness(130%);
      box-shadow: none;
    }
  }
`;
