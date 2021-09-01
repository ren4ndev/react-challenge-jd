import styled from 'styled-components';
import { Grid } from '../../../styles/Grid';
import { colors, queries } from '../../../styles/variables';

export const Section = styled.section`
  height: fit-content;
  width: 100%;
`;

export const Divider = styled(Grid)`
  background-color: ${colors.background};
  grid-template-rows: 2px;
`;

export const Line = styled.div`
  background-color: ${colors.divider};
  grid-column: main-start/main-end;
  grid-row: 1/1;
  height: 100%;
  width: 100%;

  @media screen and (min-width: ${queries.l}) {
    grid-column: 4/12;
  }
`;
