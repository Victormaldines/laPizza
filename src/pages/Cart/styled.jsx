import styled from 'styled-components';

import { Container, Section, Title } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const CartContainer = styled(Container)`
  padding: 20px 0;
`;

export const CartSection = styled(Section)`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  border-radius: 20px;
  padding: 40px;
  background: ${colors.fadedBlack};

  .checkout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25vw;
    margin: 10px 0;
    padding: 0 20px;

    .checkout-button {
      background: linear-gradient(
        135deg,
        ${colors.red},
        ${colors.gradientRedEnd}
      );
      font-weight: bold;
      padding: 10px 25px;
      transition: border 0.075s ease-in, filter 0.075s ease-in;

      &:hover {
        letter-spacing: initial;
        border: 1px solid #fff;
        filter: brightness(150%);
        box-shadow: 2px 2px 5px ${colors.blackShadow};
      }
    }
  }
`;

export const CartTitle = styled(Title)``;

export const Product = styled.span`
  display: flex;
  justify-content: space-around;
  width: 25vw;
  background: rgba(0, 0, 0, 0.4);
  font-size: 0.9em;
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 5px ${colors.blackShadow};
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
    border-left: 2px dashed #f00;

    .product-name {
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`;
