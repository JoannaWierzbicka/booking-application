/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { StyledFullPage, StyledHeader, StyledInfo, StyledMenu, StyledLink } from '../../styledComponents'
import Button from '@mui/material/Button'
import Logo from '../Logo'
import NavBar from '../NavBar'
import Stars from '../Stars/Stars'
import Typography from '@mui/material/Typography'

export const StartPage = (props) => {
  const { logIn, signUp } = props
  return (
    <StyledFullPage className={'start-page'}>
      <Stars>
        <NavBar
          logIn={logIn}
          signUp={signUp}
        />
        <StyledInfo>
          <Typography
            className={'info-header'}
            variant={'h1'}
          >Witaj w BOOKING APP
          </Typography>
          <Typography
            className={'info-text'}
            variant={'outlined'}
          >Pomożemy Ci w zarządzaniu rezerwacjami w Twoim obiekcie turystycznym.
          </Typography>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              className={'start-page-button'}
              variant={'contained'}
              color={'primary'}
            >ZOBACZ WIĘCEJ
            </Button>
            <Button
              className={'start-page-button'}
              variant={'contained'}
              color={'primary'}
              onClick={signUp}
            >Załóż konto
            </Button>
          </div>

        </StyledInfo>
      </Stars>
    </StyledFullPage>
  )
}

StartPage.propTypes = {
  logIn: PropTypes.func.isRequired
}

export default StartPage
