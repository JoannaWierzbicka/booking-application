import React from 'react'
import { PropTypes } from 'prop-types'
import Button from '@mui/material/Button'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import PasswordIcon from '@mui/icons-material/Password'
import { StyledFullPage, StyledForm, StyledNavLink } from '../../styledComponents'

export const Message = (props) => {
  const { message, icon, onButtonClick } = props

  return (
    <StyledFullPage className={'message'}>
      <StyledForm>
        {
        icon === 'info'
          ? <InfoIcon
              color={'info'}
              fontSize={'large'}
            /> :
          icon === 'error'
            ? <ErrorIcon
                color={'error'}
                fontSize={'large'}
              />
            : icon === 'help'
              ? <PasswordIcon
                  color={'success'}
                  fontSize={'large'}
                />
              : null
      }
        <p>{message}
        </p>
        {icon === 'info'
          ?
            <StyledNavLink
              to={'/admin'}
              className={'button-message'}
            >
              <Button
                variant={'contained'}
                color={'primary'}
                onClick={onButtonClick}
              >OK
              </Button>
            </StyledNavLink>
          : icon === 'help'
            ?
              <StyledNavLink
                to={'/login'}
                className={'button-message'}
              >
                <Button
                  variant={'contained'}
                  color={'primary'}
                  onClick={onButtonClick}
                >Zaloguj się
                </Button>
              </StyledNavLink>
            :

              <StyledNavLink
                to={'/'}
                className={'button-message'}
              >
                <Button
                  variant={'contained'}
                  color={'primary'}
                  onClick={onButtonClick}
                >WRÓĆ
                </Button>
              </StyledNavLink>}

      </StyledForm>

    </StyledFullPage>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['error', 'info', 'help']),
  onButtonClick: PropTypes.func.isRequired
}

export default Message
