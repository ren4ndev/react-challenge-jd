import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageTag,
} from './styles';

export default function Image({
  src,
  alt,
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
  fit: PropTypes.string,
  mix: PropTypes.string,
  position: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  fit: null,
  mix: null,
  position: null,
  width: null,
  height: null,
};
