import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import SuccessIcon from '../../../lib/icons/SuccessIcon';
import ErrorIcon from '../../../lib/icons/ErrorIcon';
import CloseIcon from '../../../lib/icons/CloseIcon';
import {
  PopupContainer,
} from './styles';
import { colors } from '../../../styles/variables';

export default function Popup({
  type,
  message,
}) {
  const [show, setShow] = useState(true);
  switch (type) {
    case 'success':
      return (
        <PopupContainer show={show}>
          <SuccessIcon fill={colors.primary} width="16px" height="16px" />
          <Typography
            type="popup"
            fontWeight="400"
            fontColor={colors.grey}
            margin="0 20px"
          >
            {message}
          </Typography>
          <CloseIcon fill={colors.grey} width="16px" height="16px" onClick={() => setShow(false)} />
        </PopupContainer>
      );
    case 'error':
      return (
        <PopupContainer show={show}>
          <ErrorIcon fill={colors.error} width="16px" height="16px" />
          <Typography
            type="popup"
            fontWeight="400"
            fontColor={colors.grey}
            margin="0 20px"
          >
            {message}
          </Typography>
          <CloseIcon fill={colors.grey} width="16px" height="16px" onClick={() => setShow(false)} />
        </PopupContainer>
      );
    default:
      return null;
  }
}

Popup.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
