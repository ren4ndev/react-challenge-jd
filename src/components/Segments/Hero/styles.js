import styled from 'styled-components';
import { Grid } from '../../../styles/Grid';

export const HeroContainer = styled.section`
  height: fit-content;
  width: 100%;
`;

export const HeroGrid = styled(Grid)`
  grid-template-rows: [image-start header-start] 64px [header-end] 88px [title-start] auto [title-end desc-start] auto [desc-end] 66px [button-start] auto [button-end] 78px [image-end downbar-start] auto [downbar-end];
  min-height: 756px;
  row-gap: 0;
`;

export const Title = styled.div`
  align-items: center;
  display: flex;
  grid-column: main-start/main-end;
  grid-row: title-start/title-end;
  height: 100%;
  max-height: 100%;
  padding: 0 28px;
`;

export const Description = styled.div`
  align-items: center;
  display: flex;
  grid-column: main-start/main-end;
  grid-row: desc-start/desc-end;
`;

export const LinkWrapper = styled.a`
  align-items: center;
  display: flex;
  grid-column: main-start/main-end;
  grid-row: button-start/button-end;
`;

export const Downbar = styled.div`
  grid-column: main-start/main-end;
  grid-row: douwnbar-start/douwnbar-end;
  height: 216px;
`;
