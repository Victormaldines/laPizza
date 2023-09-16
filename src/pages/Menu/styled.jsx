import styled from 'styled-components';

import { Container, Section, Title } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const MenuContainer = styled(Container)`
  padding: 20px 0;
`;

export const PizzaSection = styled(Section)`
  padding: 40px 0;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${colors.fadedBlack};

  .add-pizza a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    font-size: 0.9em;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    border: 1px solid #f00;
    background: linear-gradient(135deg, ${colors.red}, rgb(200, 0, 0));
    transition: filter 0.075s ease-in;

    svg {
      font-size: 0.8em;
      margin-right: 10px;
    }
  }

  .button:hover {
    letter-spacing: initial;
    filter: brightness(120%);
    box-shadow: 2px 2px 5px ${colors.blackShadow};
  }
`;

export const MenuTitle = styled(Title)`
  font-size: 2.5em;
  letter-spacing: 8px;
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

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 5px ${colors.blackShadow};
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
  }
`;

export const Info = styled(Section)`
  width: 25vw;
  align-items: flex-start;
  flex-direction: column;

  .pizza-name,
  .pizza-description,
  .pizza-price {
    margin-bottom: 10px;
  }

  .pizza-name {
    font-size: 1.8em;
    font-weight: bold;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .pizza-ingredients {
    font-style: italic;
    font-size: 0.9em;
    margin-bottom: 5px;
  }
  .pizza-price {
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
    box-shadow: 2px 2px 5px ${colors.blackShadow};
    cursor: pointer;
    transition: filter 0.07s ease-in, box-shadow 0.07s ease-in;

    &.plus-button {
      color: white;
      border: 1px solid #0f0;
      background: linear-gradient(135deg, ${colors.green}, #0f0);
    }

    &.delete-button,
    &.remove-button {
      margin-left: 10px;
      color: #fff;
      border: 1px solid #f00;
      background: linear-gradient(135deg, ${colors.red}, #f00);
    }

    &.edit-button {
      border: 1px solid #ff0;
      background: linear-gradient(135deg, ${colors.yellow}, #ff0);
    }

    &.alert-button {
      display: none;
      margin-left: 10px;
      border: 1px solid #f80;
      background: linear-gradient(135deg, ${colors.orange}, #f80);
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
