import styled from 'styled-components';

import { getFontSize, getSpacing } from '../styles/utils';

const caretWidth = 24;
const dropdownButtonSize = 56;
// eslint-disable-next-line max-len
const caretSvg = `%3Csvg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 20.6" overflow="visible" xml:space="preserve" preserveAspectRatio="xMaxYMax meet" width="${caretWidth}" height="auto"%3E%3Cpath fill="%2316bab1" d="M19.1,20.6c0.5,0.5,1.3,0.5,1.8,0c0,0,0,0,0,0L39.6,2.2c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0L20,17.9L2.2,0.4 c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8L19.1,20.6z"/%3E%3C/svg%3E`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${getSpacing(3)};

  label {
    margin-bottom: ${getSpacing(1)};
  }

  select {
    appearance: none;
    background-image:
      url('data:image/svg+xml,${caretSvg}'),
      linear-gradient(
        to right,
        ${({ theme }) => theme.colors.white} calc(100% - ${dropdownButtonSize}px),
        ${({ theme }) => theme.colors.darkgray} ${dropdownButtonSize}px,
        ${({ theme }) => theme.colors.darkgray} 100%
      );
    background-position: calc(100% - ${(dropdownButtonSize - caretWidth) / 2}px) center, right center;
    background-repeat: no-repeat;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${getFontSize(16)};
    padding: ${getSpacing(2)} ${dropdownButtonSize}px ${getSpacing(2)} ${getSpacing(2)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: ${getSpacing(5)};
  }
`;

export default Wrapper;
