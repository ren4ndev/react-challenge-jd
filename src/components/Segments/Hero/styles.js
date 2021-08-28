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
