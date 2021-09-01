import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorIcon({
  fill,
  height,
  width,
}) {
  return (
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill}>
      <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );
}

ErrorIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

ErrorIcon.defaultProps = {
  fill: 'black',
  height: '24',
  width: '24',
};
