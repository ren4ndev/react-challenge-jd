import styled from 'styled-components';

export const Typo = styled.span`
  color: ${({ fontColor }) => fontColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontMobile }) => fontMobile};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineMobile }) => lineMobile};
  margin: ${({ margin }) => margin || 0};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration-line: ${({ textDecoration }) => textDecoration};

  @media screen and (min-width: 1024px) {
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
  }
`;
