import styled from 'styled-components';

import { Container, Section, Title } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const Page404Container = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Page404Section = styled(Section)`
  display: flex;
  flex-direction: column;
  height: 75vh;
  width: 100vw;
  background: linear-gradient(
    135deg,
    ${colors.gradientBlackStart},
    ${colors.gradientBlackEnd}
  );
  border-radius: 5px;

  img {
    border-radius: 5px;
    box-shadow: 0 0 5px ${colors.blackShadow};
    max-width: 90vw;
  }
`;

export const Page404Title = styled(Title)`
  text-transform: initial;
  color: lightblue;
`;
