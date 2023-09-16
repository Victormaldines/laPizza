import styled from 'styled-components';

import { Container, Section, Title, Form } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const RegisterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterSection = styled(Section)`
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

export const RegisterTitle = styled(Title)`
  font-size: 1.3em;
  margin: 0 0 40px 0;
`;

export const RegisterForm = styled(Form)``;
