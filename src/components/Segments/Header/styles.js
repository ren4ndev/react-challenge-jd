import styled from 'styled-components';
import { queries } from '../../../styles/variables';

export const HeaderContainer = styled.header`
  align-items: flex-end;
  display: flex;
  grid-column: main/main;
  grid-row: header-start/header-end;
  height: 100%;
  justify-content: space-between;
  padding-left: 4px;
  width: 100%
`;

export const LeftMenu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: fit-content;
`;

export const RightMenu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: fit-content;
`;

export const MenuNav = styled.nav`
  align-items: center;
  display: none;
  height: 100%;
  justify-content: space-around;
  justify-self: flex-start;

  @media screen and (min-width: ${queries.l}) {
    display: flex;
  }
`;

export const SignInContainer = styled.div`
  display: none;

  @media screen and (min-width: ${queries.s}) {
    display: block;
  }
`;
