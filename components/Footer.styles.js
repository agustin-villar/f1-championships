import styled from 'styled-components';
import { getSpacing } from '../styles/utils';

const StyledFooter = styled.footer`
  justify-content: center;
  display: flex;
  padding: ${getSpacing(5)} 0;

  svg {
    width: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    svg {
      width: 100px;
    }
  }
`;

export default StyledFooter;
