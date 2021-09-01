import styled from 'styled-components';
import { colors, queries } from '../../../styles/variables';

export const ButtonComponent = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || colors.primary};
  border: 1px solid ${({ backgroundColor }) => backgroundColor || colors.primary};
  border-radius: ${({ bordeRadius }) => bordeRadius || '4px'};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
  height: ${({ height }) => height || '44px'};
  margin: ${({ margin }) => margin || 0};
  max-width: 100%;
  width: ${({ width, widthMobile }) => widthMobile || width || '234px'};

  @media screen and (min-width: ${queries.l}) {
    margin: ${({ marginDesk, margin }) => marginDesk || margin};
    width: ${({ width }) => width || '234px'};
  }
`;
