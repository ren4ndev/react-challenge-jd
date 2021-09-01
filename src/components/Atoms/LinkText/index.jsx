import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import {
  Container,
} from './styles';
import { colors } from '../../../styles/variables';

export default function LinkText({
  children,
  margin,
  marginDesk,
  fontColor,
}) {
  return (
    <Container margin={margin} marginDesk={marginDesk}>
      <Typography
        type="link"
        fontColor={fontColor || colors.black}
        fontWeight="500"
        textAlign="center"
        textDecoration="underline"
      >
        {children}
      </Typography>
    </Container>
  );
}

LinkText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
  margin: PropTypes.string,
  marginDesk: PropTypes.string,
  fontColor: PropTypes.string,
};

LinkText.defaultProps = {
  margin: null,
  marginDesk: null,
  fontColor: null,
};
