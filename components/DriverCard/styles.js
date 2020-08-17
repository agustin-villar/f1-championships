import styled from 'styled-components';

import { getSpacing, getFontSize } from '../../styles/utils';

// eslint-disable-next-line max-len
const trophySvg = '%3Csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" overflow="visible"%3E%3Cpath fill="%23655801" d="M25.2,2h-4.1V0.8c0-0.4-0.4-0.8-0.8-0.8H5.7C5.2,0,4.9,0.4,4.9,0.8V2H0.8C0.4,2,0,2.4,0,2.8v3c0,3,2.4,5.5,5.6,6 c0,0,0.1,0,0.1,0h0c1,2,2.8,3.5,5,4.2c-0.2,1.8-1.5,3.4-1.9,4H7.9c-0.4,0-0.8,0.4-0.8,0.8v4.5c0,0.4,0.4,0.8,0.8,0.8h10.2 c0.4,0,0.8-0.4,0.8-0.8v-4.5c0-0.4-0.4-0.8-0.8-0.8h-0.9c-0.5-0.6-1.7-2.2-1.9-4c2.2-0.6,4-2.2,5-4.2h0c0,0,0.1,0,0.1,0 c3.2-0.4,5.6-3,5.6-6v-3C26,2.4,25.6,2,25.2,2z M1.6,5.8V3.6h3.2v4.5C4.9,8.7,5,9.4,5.1,10C3.1,9.4,1.6,7.7,1.6,5.8z M24.4,5.8 c0,2-1.5,3.6-3.5,4.2c0.2-0.6,0.2-1.2,0.2-1.9V3.6h3.2V5.8z"/%3E%3C/svg%3E';

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
  position: relative;

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

  ${({ winner }) => (winner ? `
    &:before {
      background-image: linear-gradient(to bottom,
          rgba(238,195,26,1) 0%,
          rgba(254,221,11,1) 4%,
          rgba(254,235,114,1) 6%,
          rgba(254,221,11,1) 15%,
          rgba(254,221,11,1) 30%,
          rgba(238,195,26,1) 100%);
      background-repeat: no-repeat;
      box-sizing: border-box;
      border: 1px solid #fef19a;
      border-top: 0;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%);
      content: '';
      display: block;
      width: 36px;
      position: absolute;
      right: ${getSpacing(2)};
      top: -4px;
      height: 60px;
    }

    &:after {
      background-image: url('data:image/svg+xml,${trophySvg}');
      content: '';
      display: block;
      height: 26px;
      position: absolute;
      right: 21px;
      top: 12px;
      width: 26px;
    }

  ` : null)}
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
