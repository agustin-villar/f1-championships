import styled from 'styled-components';

import { getSpacing, getFontSize } from '../../styles/utils';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 -5px 7px 3px rgba(30, 30, 19, 0.15);
  display: flex;
  justify-content: space-between;
  margin-bottom: ${getSpacing(3)};
  padding: ${getSpacing(2)} ${getSpacing(2)};

  div {
    align-items: flex-end;
    color: ${({ theme }) => theme.colors.darkgray};
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }

  h1 {
    font-size: ${getFontSize(18)};
    margin: 0;
    text-transform: uppercase;
  }

  svg {
    height: 20px;
    width: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      font-size: ${getFontSize(22)};
    }

    svg {
      height: 25px;
      width: 100px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: ${getSpacing(5)};

    h1 {
      font-size: ${getFontSize(24)};
    }

    svg {
      height: 27px;
      width: 110px;
    }
  }

  @media (min-width: calc(${({ theme }) => theme.breakpoints.maxDesktop} + ${getSpacing(4)})) {
    padding: ${getSpacing(3)} calc((100% - 1200px) / 2);
  }
`;

export default StyledHeader;
