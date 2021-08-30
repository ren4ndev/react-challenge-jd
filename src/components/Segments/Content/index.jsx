import React from 'react';
import PropTypes from 'prop-types';
import ContainedImage from './ContainedImage';

export default function Content({
  type,
  imageSrcDesk,
  imageSrcMob,
  title,
  desc,
}) {
  switch (type) {
    case 'containedImage':
      return (
        <ContainedImage
          imageSrcDesk={imageSrcDesk}
          imageSrcMob={imageSrcMob}
          title={title}
          desc={desc}
        />
      );
    default:
      return null;
  }
}

Content.propTypes = {
  type: PropTypes.string.isRequired,
  imageSrcDesk: PropTypes.string,
  imageSrcMob: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

Content.defaultProps = {
  imageSrcDesk: null,
  imageSrcMob: null,
  title: null,
  desc: null,
};
