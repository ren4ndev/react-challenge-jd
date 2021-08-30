import styled from 'styled-components';
import { queries } from '../../../styles/variables';

export const ImageDesk = styled.div`
  background-image: ${({ gradient }) => gradient};
  display: none;
  grid-column: full-start/full-end;
  grid-row: image-start/image-end;
  height: 100%;
  position: relative;
  z-index: -1;

  @media screen and (min-width: 640px) {
    display: block;
  }
`;

export const ImageMob = styled.div`
  background-image: ${({ gradient }) => gradient};
  grid-column: full-start/full-end;
  grid-row: image-start/image-end;
  height: 100%;
  position: relative;
  z-index: -1;

  @media screen and (min-width: ${queries.s}) {
    display: none;
  }
`;
