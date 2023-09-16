import styled from 'styled-components';

import { Container, Section, Title } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const MyInfoContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyInfoSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(
    135deg,
    ${colors.gradientBlackStart},
    ${colors.gradientBlackEnd}
  );
  backdrop-filter: blur(3px);
  border-radius: 20px;
  min-width: 450px;
  padding: 60px 50px;

  span + span {
    padding-top: 15px;
  }

  & span {
    display: flex;
    flex-direction: column;
    width: 100%;

    &:nth-child(n + 2) {
      margin-top: 10px;
    }
  }

  label {
    font-weight: bold;
    text-transform: uppercase;
  }

  input[type='text'],
  input[type='password'] {
    color: ${colors.fadedBlack};
    padding: 5px;
    border: 1px solid #fff;
    border-radius: 0 5px 5px 0;

    &:focus {
      border: 1px dashed ${colors.red};
    }
  }

  .data-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-end;
    border: 1px solid #f00;
    border-radius: 4px;
    color: #fff;
    background-color: transparent;
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.1s ease-in, color 0.1s ease-in;

    &:hover {
      background-color: ${colors.red};
    }
  }

  .user-data {
    align-self: center;
    padding: 5px 0 5px 10px;
    border-left: 2px dashed #f00;
    font-size: 0.9em;
    font-style: italic;
  }

  .update {
    margin-left: 20px;
  }

  .editing-buttons {
    display: flex;
    flex-direction: row;
  }

  .editing-buttons button {
    flex: 1;
  }

  .editing-buttons button + button {
    margin-left: 20px;
  }
`;

export const MyInfoTitle = styled(Title)`
  text-align: center;
  font-size: 1.2em;
  margin: 0 0 30px 0;
`;
