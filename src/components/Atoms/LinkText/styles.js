import styled from 'styled-components';
import { queries } from '../../../styles/variables';

export const Container = styled.div`
  margin: ${({ margin }) => margin || 0};

  @media screen and (min-width: ${queries.l}) {
    margin: ${({ marginDesk, margin }) => marginDesk || margin};
  }
`;
