import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const Container = styled.div`
  border-bottom: solid 1px ${colors.white};
  height: 24px;
  margin: ${({ margin }) => margin || 0};
`;
