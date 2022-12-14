import React from 'react'
import PropTypes from 'prop-types'
import { StyledSelect, StyledInputWrapper, StyledLabel } from '../../styledComponents'

export const FormElementWithSelect = (props) => {
  const { title, name, onChange, defaultValue, options, required, ...otherProps } = props
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name}>
        {title}:
      </StyledLabel>
      <StyledSelect
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        {...otherProps}
      >{options.map(item => {
        return (
          <option
            required
            key={item.id || item.code || item}
            value={item.id || item.label || item}
          >{item.title || item.label || item }
          </option>)
      })}
      </StyledSelect>
    </StyledInputWrapper>
  )
}

FormElementWithSelect.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  defaultValue: PropTypes.any,
  options: PropTypes.array
}

export default FormElementWithSelect
