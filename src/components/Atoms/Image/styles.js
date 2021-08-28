import styled from 'styled-components';

export const ImageTag = styled.img`
  height: ${({ height }) => height || '100%'};
  mix-blend-mode: ${({ mix }) => mix};
  object-fit: ${({ fit }) => fit};
  object-position: ${({ position }) => position};
  width: ${({ width }) => width || '100%'};
`;
