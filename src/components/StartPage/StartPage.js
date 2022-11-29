/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { StyledFullPage, StyledHeader, StyledInfo, StyledMenu, StyledLink } from '../../styledComponents'
import Button from '@mui/material/Button'
import Logo from '../Logo'
import NavBar from '../NavBar'

export const StartPage = (props) => {
  const { logIn } = props
  return (
    <StyledFullPage>
      <NavBar logIn={logIn}/>
      <StyledInfo>
        <h4>Witaj w BOOKING APP</h4>
        <p>Pomożemy Ci w zarządzaniu rezerwacjami w Twoim obiekcie turystycznym</p>
        <Button
          variant={'contained'}
          color={'primary'}
        >ZOBACZ WIĘCEJ
        </Button>
      </StyledInfo>
    </StyledFullPage>
  )
}

StartPage.propTypes = {
  logIn: PropTypes.func.isRequired
}

export default StartPage
