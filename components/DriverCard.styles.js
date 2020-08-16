import styled from 'styled-components';

import { getSpacing, getFontSize } from '../styles/utils';

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.darkgray};
  background-image:
    linear-gradient(to top, rgba(0, 0, 0, 0.8) 25%, rgba(25,221,220,0.5) 160%),
    ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center top;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex: auto;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.1;
  min-height: 350px;
  padding: ${getSpacing(3)};

  h2 {
    font-size: ${getFontSize(32)};
    margin: ${getSpacing(2)} 0;
  }

  p {
    margin: 0 0 ${getSpacing(1)} 0;

    &:last-of-type {
      margin: 0;
    }
  }
`;

const Footer = styled.footer`
  span {
    display: block;
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    margin-bottom: ${getSpacing(1)};
  }
`;

export { Wrapper, Footer };
