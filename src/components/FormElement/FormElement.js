import React from 'react'
import PropTypes from 'prop-types'
import { StyledInput, StyledInputWrapper, StyledLabel } from '../../styledComponents'

export const FormElement = (props) => {
  const { title, name, type, onChange, value, required, ...otherProps } = props
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name}>
        {title}:

      </StyledLabel>
      <StyledInput
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
        {...otherProps}
      />
    </StyledInputWrapper>
  )
}

FormElement.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  required: PropTypes.bool
}

export default FormElement
