import styled from 'styled-components';

import { Container, Section, Title } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const MyOrdersContainer = styled(Container)`
  padding: 20px 0;
`;

export const MyOrdersSection = styled(Section)`
  flex-direction: column;
  background: ${colors.fadedBlack};
  min-height: 80vh;
  border-radius: 20px;
  padding-bottom: 40px;
`;

export const MyOrdersTitle = styled(Title)``;

export const Order = styled.section`
  background: linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.075));
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 5px ${colors.blackShadow};
  border-radius: 10px;
  padding: 25px 50px 5px 50px;
  margin-bottom: 10px;
  height: initial;

  .order-id {
    display: inline-block;
    margin-bottom: 10px;
    background-color: red;
    border-radius: 25px;
    padding: 5px 15px;
    font-weight: bold;
    font-size: 0.9em;
  }

  tr {
    text-align: center;
  }

  th,
  td {
    padding: 0 5px 15px 5px;
  }

  th {
    text-transform: uppercase;
    font-size: 0.9em;
  }

  td {
    font-style: italic;
    font-size: 0.9em;
  }

  .more-info {
    display: flex;
    margin-left: 10px;
    padding: 1px;
    background: red;
    border-radius: 50%;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    transition: transform 0.2s ease-in;

    svg {
      pointer-events: none;
    }

    &.info-active {
      transform: rotate(180deg);
    }
  }

  .status {
    &.processing {
      color: yellow;
    }

    &.done {
      color: lightgreen;
    }

    &.canceled {
      color: lightcoral;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    font-size: 0.9em;

    .product {
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.3)
      );
      border-radius: 10px;
      display: flex;
      align-items: center;
      margin: 15px 0;
      padding: 30px 45px;

      .product-image img {
        width: 150px;
        border-radius: 50%;
      }

      .product-info {
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        padding: 5px 10px;
        border-left: 2px dashed red;

        .product-name {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 1em;
          font-style: italic;
          margin-bottom: 5px;
        }

        .product-quantity,
        .procuct-price {
          margin-top: 5px;
        }
      }
    }
  }
`;

export const Product = styled.span``;
