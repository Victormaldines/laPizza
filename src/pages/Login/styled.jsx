import styled from 'styled-components';

import { Container, Section, Title, Form } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginSection = styled(Section)`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    ${colors.gradientBlackStart},
    ${colors.gradientBlackEnd}
  );
  backdrop-filter: blur(3px);
  border-radius: 20px;
  width: 500px;
  height: 400px;
`;

export const LoginTitle = styled(Title)`
  margin: 0 0 20px 0;
`;

export const LoginForm = styled(Form)`
  .register {
    margin-top: 2px;
    display: inline-block;
    font-size: 0.8em;

    a {
      display: inline-block;
      color: #f00;
      text-decoration: underline;
      cursor: pointer;
      transition: 0.075s ease-in;

      &:hover {
        color: #fff;
      }
    }
  }
`;
