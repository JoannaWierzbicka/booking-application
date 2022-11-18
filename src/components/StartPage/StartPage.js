/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import StyledStartPage from '../../styledComponents/StyledStartPage'
import StyledHeader from '../../styledComponents/StyledHeader'
import StyledInfo from '../../styledComponents/StyledInfo'
import StyledMenu from '../../styledComponents/StyledMenu'
import StyledLink from '../../styledComponents/StyledLink'
import Button from '@mui/material/Button'
// import StyledFooter from '../../styledComponents/StyledFooter'
import Logo from '../Logo'
// import MenuIcon from '@mui/icons-material/Menu'

export const StartPage = (props) => {
  const { onClickLogin } = props
  return (
    <StyledStartPage>
      <StyledHeader>
        <Logo style={{ marginLeft: '15px', width: '50px', height: '50px' }}/>
        <StyledMenu>
          {/* <MenuIcon/> */}
          <StyledLink>Info</StyledLink>
          <StyledLink>Kontakt</StyledLink>
          <StyledLink onClick={onClickLogin}>Logowanie</StyledLink>
        </StyledMenu>
      </StyledHeader>
      <StyledInfo>
        <h4>Witaj w BOOKING APP</h4>
        <p>Pomożemy Ci w zarządzaniu rezerwacjami w Twoim obiekcie turystycznym</p>
        <Button
          variant={'contained'}
          color={'primary'}
        >ZOBACZ WIĘCEJ
        </Button>
      </StyledInfo>
    </StyledStartPage>
  )
}

StartPage.propTypes = {
  onClickLogin: PropTypes.func.isRequired
}

export default StartPage
