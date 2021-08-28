import styled from 'styled-components';

export const Typo = styled.span`
  color: ${({ fontColor }) => fontColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontMobile }) => fontMobile};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineMobile }) => lineMobile};
  text-align: ${({ textAlign }) => textAlign};

  @media screen and (min-width: 1024px) {
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
  }
`;
