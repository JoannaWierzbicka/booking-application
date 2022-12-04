import React from 'react'
import PropTypes from 'prop-types'
import { StyledFullPage, StyledInfo, StyledNavLink } from '../../styledComponents'
import Button from '@mui/material/Button'
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
          <StyledNavLink to={'/create-account'}><Button
            className={'start-page-button'}
            variant={'contained'}
            color={'primary'}
            onClick={signUp}
                                                >Załóż konto
          </Button>
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
