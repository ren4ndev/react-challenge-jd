import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const PopupContainer = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.divider};
  border-radius: 4px;
  box-shadow: 7px 6px 24px -9px ${colors.grey};
  bottom: 20px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  height: 48px;
  justify-content: center;
  max-width: 328px;
  padding: 14px 20px;
  position: fixed;
  right: 20px;
  width: 50%;
  z-index: 10;
`;
