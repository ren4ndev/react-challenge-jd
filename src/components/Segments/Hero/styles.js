import styled from 'styled-components';
import { Grid } from '../../../styles/Grid';
import { queries } from '../../../styles/variables';

export const HeroContainer = styled.section`
  height: fit-content;
  width: 100%;
`;

export const HeroGrid = styled(Grid)`
  grid-template-rows: [image-start header-start] 64px [header-end content-start] auto [content-end image-end downbar-start] auto [downbar-end];
  row-gap: 0;
`;

export const HeroContent = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  grid-column: main-start/main-end;
  grid-row: content-start/content-end;
  height: 100%;
  justify-content: center;
  max-height: 100%;

  @media screen and (min-width: ${queries.m}) {
    align-items: flex-start;
    grid-column: 2/8;
  }
`;

export const Title = styled.div`
  align-items: center;
  display: flex;
  height: fit-content;
  max-height: 100%;
  max-width: 420px;
  padding: 88px 28px 8px;
  text-align: center;

  @media screen and (min-width: ${queries.m}) {
    padding: 88px 0 8px;
    text-align: left;
  }

  @media screen and (min-width: ${queries.l}) {
    max-width: 584px;
  }
`;

export const Description = styled.div`
  align-items: center;
  display: flex;
  max-width: 420px;
  padding: 8px 0 33px;
  text-align: center;

  @media screen and (min-width: ${queries.m}) {
    text-align: left;
  }

  @media screen and (min-width: ${queries.l}) {
    max-width: 584px;
  }
`;

export const LinkWrapper = styled.a`
  align-items: center;
  display: flex;
  padding: 33px 0 78px;
`;

export const ContentImage = styled.div`
  align-self: center;
  display: none;
  grid-column: 9/13;
  grid-row: content-start/content-end;
  height: fit-content;
  max-width: 316px;

  @media screen and (min-width: ${queries.m}) {
    display: flex;
  }

  @media screen and (min-width: ${queries.m}) {
    grid-column: 9/13;
  }
`;

export const Downbar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: main-start/main-end;
  grid-row: downbar-start/downbar-end;
  justify-content: center;
  padding: 32px;

  @media screen and (min-width: ${queries.l}) {
    flex-direction: row;
  }
`;
