import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Atoms/Image';
import {
  ImageDesk,
  ImageMob,
} from './styles';

export default function ImageSet({
  srcDesk,
  srcMob,
  alt,
  gradient,
  fit,
  mix,
  position,
}) {
  return (
    <>
      <ImageDesk gradient={gradient}>
        <Image src={srcDesk} alt={alt} fit={fit} position={position} mix={mix} />
      </ImageDesk>
      <ImageMob gradient={gradient}>
        <Image src={srcMob} alt={alt} fit={fit} position={position} mix={mix} />
      </ImageMob>
    </>
  );
}

ImageSet.propTypes = {
  srcDesk: PropTypes.string,
  srcMob: PropTypes.string,
  alt: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  fit: PropTypes.string,
  mix: PropTypes.string,
  position: PropTypes.string,
};

ImageSet.defaultProps = {
  srcDesk: '',
  srcMob: '',
  gradient: null,
  fit: 'cover',
  mix: null,
  position: 'center',
};
