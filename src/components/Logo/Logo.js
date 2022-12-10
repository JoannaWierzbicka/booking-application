/* eslint-disable react/prop-types */
import * as React from 'react'
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

export default Logo
