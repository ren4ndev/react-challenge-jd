import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const ButtonComponent = styled.button`
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  border-radius: ${({ bordeRadius }) => bordeRadius || '4px'};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
  height: ${({ height }) => height || '44px'};
  margin: ${({ margin }) => margin || 0};
  max-width: 100%;
  width: ${({ width }) => width || '234px'};
`;
