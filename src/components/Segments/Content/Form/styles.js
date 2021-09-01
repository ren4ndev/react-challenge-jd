import styled from 'styled-components';
import { Grid } from '../../../../styles/Grid';
import { colors, queries } from '../../../../styles/variables';

export const FormGrid = styled(Grid)`
  background-color: ${colors.background};
  grid-auto-rows: auto;
  padding: 64px 0;
`;

export const Content = styled.div`
  grid-column: main-start/main-end;
  grid-row: 1/2;
  text-align: center;

  @media screen and (min-width: ${queries.m}) {
    grid-column: ${({ contentPosition }) => (contentPosition === 'left' ? '2/8' : '8/14')};
    grid-row: 1/2;
    text-align: left;
  }

  @media screen and (min-width: ${queries.l}) {
    grid-column: ${({ contentPosition }) => (contentPosition === 'left' ? '2/7' : '9/14')};
  }

  @media screen and (min-width: ${queries.xxl}) {
    grid-column: ${({ contentPosition }) => (contentPosition === 'left' ? '3/7' : '9/13')};
  }
`;

export const Title = styled.div`
  margin-bottom: 16px;
`;

export const Desc = styled.div`
  margin-bottom: 24px;
`;

export const FormNews = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: main-start/main-end;
  grid-row: 2/3;
  justify-content: space-between;
`;

export const Loader = styled.div`
  align-self: center;
  animation: spin 0.3s linear infinite;
  border: 8px solid ${colors.divider};
  border-top: 8px solid ${colors.primary};
  border-radius: 50%;
  grid-column: main-start/main-end;
  grid-row: 1/3;
  height: 60px;
  justify-self: center;
  width: 60px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
