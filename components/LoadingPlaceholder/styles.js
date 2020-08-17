import styled from 'styled-components';
import { getSpacing } from '../../styles/utils';

const LoadingGrid = styled.div`
  display: grid;
  grid-gap: ${getSpacing(2)};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 0 0 ${getSpacing(5)} 0;

  span {
    align-content: center;
    background: ${({ theme }) => theme.colors.loadinggray};
    display: flex;
    height: 350px;
    justify-content: center;
  }

  svg {
    width: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: ${getSpacing(10)};
  }
`;

export default LoadingGrid;
