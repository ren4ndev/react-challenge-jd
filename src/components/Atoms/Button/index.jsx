import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import { colors } from '../../../styles/variables';
import {
  ButtonComponent,
} from './styles';

export default function Button({
  borderRadius,
  boxShadow,
  children,
  height,
  margin,
  width,
}) {
  return (
    <ButtonComponent
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      height={height}
      margin={margin}
      width={width}
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
  ]).isRequired,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
};

Button.defaultProps = {
  borderRadius: null,
  boxShadow: null,
  height: null,
  margin: null,
  width: null,
};
