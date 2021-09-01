import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledInput,
} from './styles';

export default function Input({
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
