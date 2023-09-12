import styled from 'styled-components';

import { Container, Section } from '../../styles/GlobalStyles';

export const CartContainer = styled(Container)`
  padding: 20px 0;
  color: white;
`;

export const CartSection = styled(Section)`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  border-radius: 20px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.8);

  .checkout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25vw;
    margin: 10px 0;
    padding: 0 20px;

    .checkout-button {
      font-size: 0.9em;
      text-transform: uppercase;
      font-weight: bold;
      background: red;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export const Title = styled.span`
  font-size: 1.5em;
  margin: 50px 0;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const Product = styled.span`
  justify-content: space-around;
  font-size: 0.9em;
  width: 25vw;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 30px 45px;
  margin-bottom: 30px;

  .product-image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 150px;
      border-radius: 50%;
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px 0px;
    padding-left: 20px;
    border-left: 2px dashed red;

    .product-name {
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`;
