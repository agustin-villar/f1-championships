import styled from 'styled-components';

import { getSpacing } from '../styles/utils';

const Container = styled.main`
  margin: 0 auto;
  width: calc(100% - ${getSpacing(4)});

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.breakpoints.maxDesktop};
  }
`;

export default Container;
