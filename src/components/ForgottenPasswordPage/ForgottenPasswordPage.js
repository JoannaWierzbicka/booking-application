import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Logo from '../Logo'
import StyledButton from '../../styledComponents/StyledButton'
import StyledForm from '../../styledComponents/StyledForm'

export const ForgottenPasswordPage = (props) => {
  const {
    email,
    onChangeEmail,
    onClickRecover,
    onClickBackToLogin,
    onClickBackToStartPage
  } = props
  return (
    <StyledForm>
      <Logo style={{ width: '120px' }}/>
      <p>Odzyskiwanie hasła</p>
      <TextField
        size={'small'}
        margin={'dense'}
        label={'E-mail'}
        variant={'outlined'}
        value={email}
        onChange={onChangeEmail}
      />
      <StyledButton
        color={'primary'}
        variant={'contained'}
        onClick={onClickRecover}
      >PRZYPOMNIJ HASŁO
      </StyledButton>
      <StyledButton
        variant={'outlined'}
        color={'black'}
        onClick={onClickBackToLogin}
      >Zaloguj się
      </StyledButton>
      <StyledButton
        className={'button-text--small'}
        variant={'text'}
        color={'black'}
        onClick={onClickBackToStartPage}
      >Powrót na stronę główną
      </StyledButton>
    </StyledForm>
  )
}

ForgottenPasswordPage.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onClickRecover: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
  onClickBackToStartPage: PropTypes.func.isRequired
}

export default ForgottenPasswordPage
