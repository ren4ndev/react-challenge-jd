import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import { colors } from '../../../styles/variables';
import {
  ButtonComponent,
} from './styles';

export default function Button({
  backgroundColor,
  borderRadius,
  boxShadow,
  children,
  height,
  margin,
  marginDesk,
  width,
  widthMobile,
}) {
  return (
    <ButtonComponent
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      height={height}
      margin={margin}
      marginDesk={marginDesk}
      width={width}
      widthMobile={widthMobile}
    >
      <Typography
        type="button"
        fontColor={colors.white}
        fontWeight="500"
      >
        {children}
      </Typography>
    </ButtonComponent>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  marginDesk: PropTypes.string,
  width: PropTypes.string,
  widthMobile: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  borderRadius: null,
  boxShadow: null,
  height: null,
  margin: null,
  marginDesk: null,
  width: null,
  widthMobile: null,
};
