import React from 'react';
import PropTypes from 'prop-types';
import { Typo } from './styles';
import { fontType } from '../../../styles/variables';

export default function Typography({
  children,
  fontColor,
  fontFamily,
  fontWeight,
  margin,
  textAlign,
  textDecoration,
  type,
}) {
  return (
    <Typo
      fontColor={fontColor}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      margin={margin}
      textAlign={textAlign}
      textDecoration={textDecoration}
      {...fontType[type].desk}
      {...fontType[type].mobile}
    >
      {children}
    </Typo>
  );
}

Typography.propTypes = {
  children: PropTypes.string,
  fontColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  margin: PropTypes.string,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  children: '',
  fontColor: 'black',
  fontFamily: 'Inter, sans-serif',
  fontWeight: '400',
  margin: null,
  textAlign: null,
  textDecoration: null,
};
