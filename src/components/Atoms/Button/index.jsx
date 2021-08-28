import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonComponent,
} from './styles';

export default function ButtonBase({
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
      {children}
    </ButtonComponent>
  );
}

ButtonBase.propTypes = {
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

ButtonBase.defaultProps = {
  borderRadius: null,
  boxShadow: null,
  height: null,
  margin: null,
  width: null,
};
