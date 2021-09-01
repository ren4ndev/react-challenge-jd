import React from 'react';
import PropTypes from 'prop-types';
import Contained from './Contained';
import ContainedImage from './ContainedImage';
import Form from './Form';

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
    case 'containedimage':
      return (
        <ContainedImage
          imageSrcDesk={imageSrcDesk}
          title={title}
          desc={desc}
        />
      );
    case 'form':
      return (
        <Form
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
  link: PropTypes.objectOf(PropTypes.string),
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
