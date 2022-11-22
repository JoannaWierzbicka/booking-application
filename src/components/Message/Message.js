import React from 'react'
import { StyledFullPage, StyledForm } from '../../styledComponents'
import Button from '@mui/material/Button'
import { PropTypes } from 'prop-types'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'

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
            : null
      }
        <p>{message}
        </p>
        <Button
          variant={'contained'}
          color={'primary'}
          onClick={onButtonClick}
        >GO BACK
        </Button>
      </StyledForm>

    </StyledFullPage>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['error', 'info']),
  onButtonClick: PropTypes.func.isRequired
}

export default Message
