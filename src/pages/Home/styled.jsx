import styled from 'styled-components';

import { Section, Container } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const HomeContainer = styled(Container)`
  display: grid;

  &.grid-template {
    grid-template:
      'message info' 1fr
      / 3fr 1fr;
  }

  .message {
    grid-area: message;
  }

  .info {
    grid-area: info;
  }
`;

export const HomeSection = styled(Section)`
  font-size: 0.9rem;

  &.message {
    color: #fff;
    justify-content: center;
    align-content: center;
    margin: 50px 20px;
    border-right: 1px solid #fff;

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 4vw;
      font-style: italic;
      font-weight: bold;
      text-transform: uppercase;

      text-shadow: 2px 2px 20px ${colors.blackShadow};
    }
  }

  &.info {
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 20px;
    margin: 20px;
    color: white;
    background: linear-gradient(
      135deg,
      ${colors.gradientBlackStart},
      ${colors.gradientBlackEnd}
    );
    letter-spacing: 1px;

    .title {
      margin-bottom: 30px;
      text-transform: uppercase;
      font-weight: bold;
      font-style: italic;
      font-size: 1.4em;
    }

    .address {
      line-height: 1.5em;
    }

    .button {
      background: linear-gradient(135deg, #f00, rgba(255, 0, 0, 0.2));
      font-weight: bold;
      margin: 10px 0 30px 0;
    }

    .telephone {
      font-style: italic;
    }

    section {
      display: flex;
      flex-direction: column;
    }

    .schedule span {
      margin: 5px 0;
      text-align: justify;
    }
  }
`;
