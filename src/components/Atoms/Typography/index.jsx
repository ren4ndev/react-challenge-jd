import React from 'react';
import PropTypes from 'prop-types';
import { Typo } from './styles';
import { fontType } from '../../../styles/variables';

export default function Typography({
  children,
  fontColor,
  fontFamily,
  fontWeight,
  textAlign,
  type,
}) {
  return (
    <Typo
      fontColor={fontColor}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      textAlign={textAlign}
      {...fontType[type].desk}
      {...fontType[type].mobile}
    >
      {children}
    </Typo>
  );
}

Typography.propTypes = {
  fontColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  children: PropTypes.string,
  textAlign: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  fontColor: 'black',
  fontFamily: 'Inter, sans-serif',
  fontWeight: '400',
  textAlign: 'left',
  children: '',
};
