import React from 'react'
import PropTypes from 'prop-types'
import { StyledFullPage, StyledInfo, StyledNavLink, StyledButton, StyledInputWrapper } from '../../styledComponents'
import NavBar from '../../components/NavBar'
import Stars from '../../components/Stars'
import Typography from '@mui/material/Typography'

export const PageMain = (props) => {
  const { logOut, userLoggedIn } = props
  return (
    <StyledFullPage className={'start-page'}>
      <Stars>
        <NavBar
          logOut={logOut}
          userLoggedIn={userLoggedIn}
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

          <StyledInputWrapper className={'start-page-buttons-wrapper'}>
            <StyledNavLink
              to={'/info'}
            >
              <StyledButton
                className={'button-start-page'}
                variant={'contained'}
                color={'primary'}
              >
                ZOBACZ WIĘCEJ
              </StyledButton>
            </StyledNavLink>
            {userLoggedIn
              ?
                <StyledNavLink to={'/admin'}>
                  <StyledButton
                    className={'button-start-page'}
                    variant={'contained'}
                    color={'primary'}
                    onClick={() => console.log('kalendarz')}
                  >Mój kalendarz

                  </StyledButton>
                </StyledNavLink> :
                <StyledNavLink to={'/create-account'}>
                  <StyledButton
                    className={'button-start-page'}
                    variant={'contained'}
                    color={'primary'}
                  >Załóż konto
                  </StyledButton>
                </StyledNavLink>}
          </StyledInputWrapper>
        </StyledInfo>
      </Stars>
    </StyledFullPage>
  )
}

PageMain.propTypes = {
  logOut: PropTypes.func,
  userLoggedIn: PropTypes.bool
}

export default PageMain
