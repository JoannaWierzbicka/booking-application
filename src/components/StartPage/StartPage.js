/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { StyledFullPage, StyledHeader, StyledInfo, StyledMenu, StyledLink } from '../../styledComponents'
import Button from '@mui/material/Button'
import Logo from '../Logo'
import NavBar from '../NavBar'

export const StartPage = (props) => {
  const { logIn, signUp } = props
  return (
    <StyledFullPage>
      <NavBar
        logIn={logIn}
        signUp={signUp}
      />
      <StyledInfo>
        <h4>Witaj w BOOKING APP</h4>
        <p>Pomożemy Ci w zarządzaniu rezerwacjami w Twoim obiekcie turystycznym</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            sx={{ margin: '10px' }}
            variant={'contained'}
            color={'primary'}
          >ZOBACZ WIĘCEJ
          </Button>
          <Button
            sx={{ margin: '10px' }}
            variant={'contained'}
            color={'primary'}
            onClick={signUp}
          >Załóż konto
          </Button>
        </div>

      </StyledInfo>
    </StyledFullPage>
  )
}

StartPage.propTypes = {
  logIn: PropTypes.func.isRequired
}

export default StartPage
