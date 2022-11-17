import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Logo from '../Logo'
import StyledButton from '../../styledComponents/StyledButton'
import StyledForm from '../../styledComponents/StyledForm'

export const LoginPage = (props) => {
  const {
    email,
    password,
    onClickLogin,
    onClickCreateAccount,
    onChangeEmail,
    onChangePassword,
    onClickRecoverPassword,
    onClickBackToStartPage
  } = props

  return (
    <StyledForm style={{ backgroundColor: '#ffffff99' }}>
      <Logo style={{ width: '120px' }}/>
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
        color={'primary'}
        variant={'contained'}
        onClick={onClickLogin}
      >ZALOGUJ SIĘ
      </StyledButton>
      <StyledButton
        variant={'contained'}
        onClick={onClickCreateAccount}
      >UTWÓRZ KONTO
      </StyledButton>
      <StyledButton
        variant={'outlined'}
        color={'black'}
        onClick={onClickRecoverPassword}
      >Przypomnij hasło
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

LoginPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onClickRecoverPassword: PropTypes.func.isRequired,
  onClickBackToStartPage: PropTypes.func.isRequired
}

export default LoginPage
