import styled from 'styled-components';
import { getSpacing } from '../styles/utils';

const StyledFooter = styled.footer`
  justify-content: center;
  display: flex;
  padding: 0 0 ${getSpacing(5)} 0;

  svg {
    width: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 0 ${getSpacing(10)} 0;

    svg {
      width: 100px;
    }
  }
`;

export default StyledFooter;
