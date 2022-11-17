/* eslint-disable no-unused-vars */
import React from 'react'
import StyledStartPage from '../../styledComponents/StyledStartPage'
import StyledHeader from '../../styledComponents/StyledHeader'
import StyledInfo from '../../styledComponents/StyledInfo'
// import StyledFooter from '../../styledComponents/StyledFooter'
import Logo from '../Logo/Logo'

export const StartPage = () => {
  return (
    <StyledStartPage>
      <div style={{ backgroundColor: '#ffffff99' }}>
        <StyledHeader>
          <Logo style={{ marginLeft: '15px', width: '50px', height: '50px' }}/>
          <div>menu</div>
        </StyledHeader>
        <StyledInfo>
          <p>hello</p>
        </StyledInfo>
      </div>
    </StyledStartPage>
  )
}

export default StartPage
