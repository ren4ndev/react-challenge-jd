import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageTag,
} from './styles';

export default function Image({
  src,
  alt,
  border,
  borderRadius,
  fit,
  mix,
  position,
  width,
  height,
}) {
  return (
    <ImageTag
      src={src}
      alt={alt}
      border={border}
      borderRadius={borderRadius}
      fit={fit}
      mix={mix}
      position={position}
      width={width}
      height={height}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  fit: PropTypes.string,
  mix: PropTypes.string,
  position: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  border: null,
  borderRadius: null,
  fit: null,
  mix: null,
  position: null,
  width: null,
  height: null,
};
