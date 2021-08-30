import styled from 'styled-components';

export const ImageTag = styled.img`
  height: ${({ height }) => height || '100%'};
  mix-blend-mode: ${({ mix }) => mix};
  object-fit: ${({ fit }) => fit};
  object-position: ${({ position }) => position};
  position: relative;
  width: ${({ width }) => width || '100%'};
`;
