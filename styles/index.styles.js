import styled from 'styled-components';

import { getSpacing, getFontSize, checkeredBackground } from './utils';

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

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    align-items: center;
    display: flex;
    font-size: ${getFontSize(14)};
    justify-content: flex-start;
    margin-bottom: ${getSpacing(3)};
  }

  span {
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    box-sizing: content-box;
    ${checkeredBackground('white', 'black', 12)}
    display: inline-block;
    height: 36px;
    margin-left: ${getSpacing(2)};
    width: 36px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    gap: ${getSpacing(2)};
    flex-direction: row;
    justify-content: space-between;

    p {
      justify-content: flex-end;
      margin-bottom: 0;
    }

    div,
    p {
      flex: 0 1 50%;
    }
  }
`;

export { Container, SelectWrapper };
