import styled from 'styled-components';

import { getSpacing } from '../styles/utils';

const List = styled.ul`
  display: grid;
  grid-gap: ${getSpacing(2)};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 0;
  padding: 0;

  li {
    display: flex;
    list-style: none;
  }
`;

export default List;
