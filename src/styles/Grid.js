import styled from 'styled-components';
import { queries } from './variables';

export const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 16px repeat(4, 1fr) 16px;
  grid-template-rows: auto;
  height: 500px;
  width: 100%;

  @media screen and (min-width: ${queries.s}) {
    grid-template-columns: 32px repeat(4, 1fr) 32px;
  }

  @media screen and (min-width: ${queries.m}) {
    grid-template-columns: 32px repeat(12, 1fr) 32px;
  }

  @media screen and (min-width: ${queries.l}) {
    grid-template-columns: 64px repeat(12, 1fr) 64px;
  }

  @media screen and (min-width: ${queries.xl}) {
    grid-template-columns: 102px repeat(12, 1fr) 102px;
  }
`;
