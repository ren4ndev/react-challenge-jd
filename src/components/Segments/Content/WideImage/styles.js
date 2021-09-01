import styled from 'styled-components';
import { Grid } from '../../../../styles/Grid';
import { colors, queries } from '../../../../styles/variables';

export const ContainedGrid = styled(Grid)`
  background-color: ${colors.background};
  grid-auto-rows: auto;
  padding: 64px 0;
`;

export const Image = styled.div`
  display: none;
  grid-column: main-start/main-end;
  grid-row: 2/3;
  height: 'fit-content';
  margin-top: 64px;
  z-index: 1;

  @media screen and (min-width: ${queries.m}) {
    display: flex;
  }

  @media screen and (min-width: ${queries.l}) {
    grid-column: 3/13;
  }
`;

export const Content = styled.div`
  grid-column: main-start/main-end;
  grid-row: 1/2;
  text-align: center;

  @media screen and (min-width: ${queries.l}) {
    grid-column: 4/12;
  }
`;

export const Title = styled.div`
  margin-bottom: 16px;
`;

export const Desc = styled.div`
  margin-bottom: 24px;
`;

export const LinkWrapper = styled.a`
  cursor: pointer;
  height: fit-content;
  width: fit-content;
`;
