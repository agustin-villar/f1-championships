import styled from 'styled-components';

import { getSpacing, getFontSize } from '../styles/utils';

const List = styled.ul`
  display: grid;
  grid-gap: ${getSpacing(2)};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 0 0 ${getSpacing(5)} 0;
  padding: 0;

  li {
    display: flex;
    list-style: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: ${getSpacing(10)};
  }
`;

const Paragraph = styled.p`
  font-size: ${getFontSize(24)};
  margin: ${getSpacing(10)} auto;
  max-width: 80%;
  text-align: center;
`;

export { List, Paragraph };
