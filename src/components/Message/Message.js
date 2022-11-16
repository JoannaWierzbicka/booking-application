import React from 'react'
import StyledFullPage from '../../styledComponents/StyledFullPage'
import { Button } from '@mui/material'
import { PropTypes } from 'prop-types'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'

export const Message = (props) => {
  const { message, icon, onButtonClick } = props

  return (
    <StyledFullPage className={'message'}>
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
      <p>{message}</p>
      <Button
        variant={'contained'}
        color={'primary'}
        onClick={onButtonClick}
      >GO BACK
      </Button>
    </StyledFullPage>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['error', 'info']),
  onButtonClick: PropTypes.func.isRequired
}

export default Message
