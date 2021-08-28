import styled from 'styled-components';

export const ImageContainer = styled.div`
  background-image: ${({ gradient }) => gradient};
  grid-column: full-start/full-end;
  grid-row: image-start/image-end;
  z-index: -1;
`;
