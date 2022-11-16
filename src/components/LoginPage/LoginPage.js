import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import LoginIcon from '@mui/icons-material/Login'
import StyledButton from '../../styledComponents/StyledButton'
import StyledForm from '../../styledComponents/StyledForm'

export const LoginPage = (props) => {
  const {
    email,
    password,
    onClickLogin,
    onClickCreateAccount,
    onChangeEmail,
    onChangePassword
  } = props

  return (
    <StyledForm>
      <LoginIcon fontSize={'large'}/>
      <TextField
        size={'small'}
        margin={'dense'}
        label={'E-mail'}
        variant={'outlined'}
        value={email}
        onChange={onChangeEmail}
      />
      <TextField
        size={'small'}
        margin={'dense'}
        type={'password'}
        label={'Hasło'}
        variant={'outlined'}
        value={password}
        onChange={onChangePassword}
      />
      <StyledButton
        className={'login-page-button'}
        color={'primary'}
        variant={'contained'}
        onClick={onClickLogin}
      >ZALOGUJ SIĘ
      </StyledButton>
      <StyledButton
        className={'login-page-button'}
        variant={'outlined'}
        onClick={onClickCreateAccount}
      >UTWÓRZ KONTO
      </StyledButton>
      <StyledButton
        className={'login-page-button'}
        variant={'text'}
        onClick={onClickCreateAccount}
      >Przypomnij hasło
      </StyledButton>
    </StyledForm>
  )
}

LoginPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired
}

export default LoginPage
