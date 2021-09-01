import React from 'react';
import PropTypes from 'prop-types';

export default function CloseIcon({
  fill,
  height,
  width,
  onClick,
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill} onClick={onClick}>
      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
    </svg>
  );
}

CloseIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
};

CloseIcon.defaultProps = {
  fill: 'black',
  height: '24',
  width: '24',
  onClick: null,
};
