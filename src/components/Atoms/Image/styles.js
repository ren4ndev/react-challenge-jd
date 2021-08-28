import styled from 'styled-components';

export const ImageTag = styled.img`
  height: ${({ height }) => height || '100%'};
  object-fit: ${({ fit }) => fit};
  object-position: ${({ position }) => position};
  width: ${({ width }) => width || '100%'};
`;
