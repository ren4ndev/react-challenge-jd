import React from 'react';
import PropTypes from 'prop-types';
import Contained from './Contained';

export default function Content({
  type,
  imageSrcDesk,
  imageSrcMob,
  title,
  desc,
  link,
  contentPosition,
}) {
  switch (type) {
    case 'contained':
      return (
        <Contained
          imageSrcDesk={imageSrcDesk}
          imageSrcMob={imageSrcMob}
          title={title}
          desc={desc}
          link={link}
          contentPosition={contentPosition}
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
  link: PropTypes.objectOf,
  contentPosition: PropTypes.string,
};

Content.defaultProps = {
  imageSrcDesk: null,
  imageSrcMob: null,
  title: null,
  desc: null,
  link: null,
  contentPosition: null,
};
