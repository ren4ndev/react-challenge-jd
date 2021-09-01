import styled from 'styled-components';
import { Grid } from '../../../styles/Grid';
import { colors, queries } from '../../../styles/variables';

export const FooterContainer = styled.footer`
  background: ${colors.white};
  height: fit-content;
  width: 100%;
`;

export const FooterGrid = styled(Grid)`
  grid-auto-rows: auto;
  margin: 24px 0 24px;

  @media screen and (min-width: ${queries.l}) {
    margin: 40px 0 32px;
  }
`;

export const CtaContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: main-start/main-end;
  padding: 16px 0;
  text-align: center;

  @media screen and (min-width: ${queries.l}) {
    padding: 40px 0 41px;
  }
`;

export const ScheduleButton = styled.button`
  align-items: center;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 68px;
  margin: 24px 0;
  padding: 10px 25px;
  width: 304px;

  @media screen and (min-width: ${queries.l}) {
    margin: 32px 0 24px;
  }
`;

export const ButtonText = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 21px;
`;

export const ContactContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: main-start/main-end;
  justify-content: space-between;
  padding-top: 24px;
  text-align: center;

  @media screen and (min-width: ${queries.l}) {
    flex-direction: row;
    padding: 41px 45px;
  }
`;

export const MenuNav = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-column: main-start/main-end;
  justify-content: center;
  max-width: 250px;
  padding: 24px 0 12px;

  @media screen and (min-width: ${queries.s}) {
    max-width: 500px;
  }

  @media screen and (min-width: ${queries.l}) {
    padding: 0;
  }
`;

export const NavItem = styled.a`
  margin: 8px 16px;
  text-decoration: none;
  width: fit-content;
`;

export const Social = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  grid-column: main-start/main-end;
  justify-content: center;
  max-width: 250px;
  padding: 12px 0 20px;

  @media screen and (min-width: ${queries.l}) {
    padding: 0;
  }
`;

export const SocialItem = styled.a`
  align-items: center;
  border: 1px solid ${colors.divider};
  border-radius: 50%;
  color: ${colors.divider};
  display: flex;
  height: 45px;
  justify-content: center;
  margin: 0 8px;
  width: 45px;
`;

export const Divider = styled(Grid)`
  background-color: ${colors.white};
  grid-column: main-start/main-end;
  grid-template-rows: 2px;
  margin: 20px 0 24px;

  @media screen and (min-width: ${queries.l}) {
    display: none;
  }
`;

export const Line = styled.div`
  background-color: ${colors.divider};
  grid-column: main-start/main-end;
  grid-row: 1/1;
  height: 100%;
  width: 100%;
`;

export const Copyright = styled.div`
  background-color: ${colors.white};
  grid-column: main-start/main-end;
  text-align: center;

  @media screen and (min-width: ${queries.l}) {
    padding-top: 45px;
  }
`;
