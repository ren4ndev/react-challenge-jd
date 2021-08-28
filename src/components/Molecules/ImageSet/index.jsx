import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Atoms/Image';
import {
  ImageContainer,
} from './styles';

export default function ImageSet({
  src,
  alt,
  gradient,
  fit,
  mix,
  position,
}) {
  return (
    <ImageContainer gradient={gradient}>
      <Image src={src} alt={alt} fit={fit} position={position} mix={mix} />
    </ImageContainer>
  );
}

ImageSet.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  fit: PropTypes.string,
  mix: PropTypes.string,
  position: PropTypes.string,
};

ImageSet.defaultProps = {
  gradient: null,
  fit: 'cover',
  mix: null,
  position: 'center',
};
