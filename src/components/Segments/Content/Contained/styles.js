import styled from 'styled-components';
import { Grid } from '../../../../styles/Grid';
import { colors } from '../../../../styles/variables';

export const ContainedGrid = styled(Grid)`
  background-color: ${colors.background};
  grid-auto-rows: auto;
  padding: 64px 0;
`;

export const Image = styled.div`
  grid-column: main-start/main-end;
  grid-row: 1/2;
  height: 'fit-content';
  margin: 12px 12px 24px;
  z-index: 1;
`;

export const Content = styled.div`
  grid-column: main-start/main-end;
  grid-row: 2/3;
  text-align: center;
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
