import * as React from 'react'
import PropTypes from 'prop-types'
import image from '../../img/Logo1.png'
import nav from '../../img/Logo10.png'

export const Logo = (props) => {
  const { width, type } = props
  return (
    <img
      src={type === 'nav' ? nav : image}
      alt={'logo'}
      width={width}
    />
  )
}

Logo.propTypes = {
  width: PropTypes.number,
  type: PropTypes.string
}

export default Logo
