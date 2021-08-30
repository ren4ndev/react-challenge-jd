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
}) {
  return (
    <Container margin={margin}>
      <Typography
        type="link"
        fontColor={colors.white}
        fontWeight="500"
        textAlign="center"
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
  ]).isRequired,
  margin: PropTypes.string,
};

LinkText.defaultProps = {
  margin: null,
};
