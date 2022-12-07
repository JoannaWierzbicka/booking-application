import React from 'react'
import PropTypes from 'prop-types'
import { StyledFullPage, StyledInfo, StyledNavLink } from '../../styledComponents'
import Button from '@mui/material/Button'
import NavBar from '../../components/NavBar'
import Stars from '../../components/Stars'
import Typography from '@mui/material/Typography'

export const PageMain = (props) => {
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
            <StyledNavLink
              to={'/info'}
            >
              <Button
                className={'start-page-button'}
                variant={'contained'}
                color={'primary'}
              >
                ZOBACZ WIĘCEJ
              </Button>
            </StyledNavLink>
            <StyledNavLink to={'/create-account'}>
              <Button
                className={'start-page-button'}
                variant={'contained'}
                color={'primary'}
                onClick={signUp}
              >Załóż konto
              </Button>
            </StyledNavLink>
          </div>

        </StyledInfo>
      </Stars>
    </StyledFullPage>
  )
}

PageMain.propTypes = {
  logIn: PropTypes.func,
  signUp: PropTypes.func
}

export default PageMain
