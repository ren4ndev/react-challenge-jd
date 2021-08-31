import styled from 'styled-components';
import { queries } from './variables';

export const Grid = styled.div`
  column-gap: 16px;
  display: grid;
  grid-template-columns: [full-start] 0px [main-start] repeat(4, 1fr) [main-end] 0px [full-end];
  grid-template-rows: auto;
  width: 100%;

  @media screen and (min-width: ${queries.s}) {
    grid-template-columns: [full-start] 16px [main-start] repeat(4, 1fr) [main-end] 16px [full-end];
  }

  @media screen and (min-width: ${queries.m}) {
    grid-template-columns: [full-start] 32px [main-start] repeat(12, 1fr) [main-end] 32px [full-end];
  }

  @media screen and (min-width: ${queries.l}) {
    grid-template-columns: [full-start] 64px [main-start] repeat(12, 1fr) [main-end] 64px [full-end];
  }

  @media screen and (min-width: ${queries.xl}) {
    grid-template-columns: [full-start] 102px [main-start] repeat(12, 1fr) [main-end] 102px [full-end];
  }
`;
