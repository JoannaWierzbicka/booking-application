import React from 'react'
import PropTypes from 'prop-types'
import { StyledFullPage, StyledInfo, StyledNavLink, StyledButton } from '../../styledComponents'
import NavBar from '../../components/NavBar'
import Stars from '../../components/Stars'
import Typography from '@mui/material/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export const PageInfo = (props) => {
  const { logOut, user, userLoggedIn } = props
  const [visiblePhone, setVisiblePhone] = React.useState(false)
  const [visibleEmail, setVisibleEmail] = React.useState(false)

  return (
    <StyledFullPage className={'start-page'}>
      <Stars>
        <NavBar
          user={user}
          logOut={logOut}
          userLoggedIn={userLoggedIn}
        />
        <StyledInfo>
          <Typography className={'page-info-text'}>Booking APP to idealne miejsce do zarządzania rezerwacjami w twoim obiekcie turystycznym</Typography>
          <Typography className={'page-info-text'}>Mobilna recepcja - działa na wielu urządzeniach jednocześnie</Typography>
          <Typography className={'page-info-text'}>Łatwy podgląd na dostępność pokoi</Typography>

          <Typography className={'page-info-text'}>Masz pytania? Zapraszam do kontaktu:</Typography>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', position: 'relative', flexDirection: 'column', lineHeight: 2, margin: '20px', marginRight: '60px' }}>
              <StyledButton onClick={() => setVisibleEmail(!visibleEmail)}>
                <FontAwesomeIcon
                  style={{ fontSize: '30px', cursor: 'pointer' }}
                  icon={faEnvelope}
                />
              </StyledButton>
              {visibleEmail ? <span className={'info-mail'}>joannawierzbicka@poczta.onet.pl</span> : null}
            </div>
            <div style={{ display: 'flex', position: 'relative', flexDirection: 'column', lineHeight: 2, margin: '20px', marginLeft: '60px' }}>
              <StyledButton onClick={() => setVisiblePhone(!visiblePhone)}>
                <FontAwesomeIcon
                  style={{ fontSize: '30px', cursor: 'pointer' }}
                  icon={faPhone}
                />
              </StyledButton>
              {visiblePhone ? <span className={'info-phone'}>661120290</span> : null}
            </div>
          </div>
          {userLoggedIn
            ?
              <StyledNavLink
                to={'/admin'}
                style={{ textAlign: 'center' }}
              >
                <StyledButton
                  className={'button-start-page'}
                  variant={'contained'}
                  color={'primary'}
                  onClick={() => console.log('kalendarz')}
                >Mój kalendarz
                </StyledButton>
              </StyledNavLink> :
              <StyledNavLink
                to={'/create-account'}
                style={{ textAlign: 'center' }}
              >
                <StyledButton
                  className={'button-start-page'}
                  variant={'contained'}
                  color={'primary'}
                >Załóż konto
                </StyledButton>
              </StyledNavLink>}

        </StyledInfo>
      </Stars>
    </StyledFullPage>
  )
}

PageInfo.propTypes = {
  logOut: PropTypes.func,
  user: PropTypes.string,
  userLoggedIn: PropTypes.bool
}

export default PageInfo
