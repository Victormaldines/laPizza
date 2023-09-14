import styled from 'styled-components';
import { Container, Section } from '../../styles/GlobalStyles';

export const RegisterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const RegisterSection = styled(Section)`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
  backdrop-filter: blur(3px);
  border-radius: 20px;
  width: 500px;
  height: 400px;
`;

export const Title = styled.span`
  margin-bottom: 40px;
  text-transform: uppercase;
  font-size: 1.3em;
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
      border: 1px solid white;
      border-radius: 3px;
      padding: 5px 10px;
      margin-bottom: 10px;
      font-size: 1em;

      &:focus {
        border: 1px dashed #8e0101;
      }
    }

    & button {
      color: white;
      border: 1px solid red;
      border-radius: 3px;
      margin-top: 5px;
      padding: 7px 10px;
      background: linear-gradient(135deg, #8e0101, red);
      cursor: pointer;
      transition: letter-spacing 0.1s ease-in;

      &:hover {
        filter: brightness(110%);
        letter-spacing: 0.5px;
      }
    }
  }
`;
