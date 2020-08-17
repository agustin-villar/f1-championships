import styled from 'styled-components';

import { getSpacing } from './utils';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: calc(100% - ${getSpacing(4)});

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - ${getSpacing(6)});
    max-width: ${({ theme }) => theme.breakpoints.maxDesktop};
  }
`;

export default Container;
