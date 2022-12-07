import React from 'react'
import PropTypes from 'prop-types'
import { StyledFullPage, StyledInfo, StyledNavLink, StyledButton } from '../../styledComponents'
import NavBar from '../../components/NavBar'
import Stars from '../../components/Stars'
import Typography from '@mui/material/Typography'

export const PageInfo = (props) => {
  const { logIn, signUp } = props
  return (
    <StyledFullPage className={'start-page'}>
      <Stars>
        <NavBar
          logIn={logIn}
          signUp={signUp}
        />
        <StyledInfo>
          <Typography>Info</Typography>
          <StyledNavLink
            to={'/create-account'}
            style={{ textAlign: 'center' }}
          >
            <StyledButton
              className={'button-start-page'}
              variant={'contained'}
              color={'primary'}
              onClick={signUp}
            >Załóż konto
            </StyledButton>
          </StyledNavLink>

        </StyledInfo>
      </Stars>
    </StyledFullPage>
  )
}

PageInfo.propTypes = {
  logIn: PropTypes.func,
  signUp: PropTypes.func
}

export default PageInfo
