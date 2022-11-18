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
    onClickBackToStartPage,
    errors
  } = props

  const renderErrors = () => {
    return errors.map((err, index) => (
      <li
        style={{ listStyle: 'none', color: 'red', margin: '5px', fontSize: '10px' }}
        key={index}
      >{err}
      </li>))
  }

  return (
    <StyledForm>
      <Logo style={{ width: '120px' }}/>
      {renderErrors()}
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
        variant={'outlined'}
        color={'secondary'}
        onClick={onClickCreateAccount}
      >UTWÓRZ KONTO
      </StyledButton>
      <StyledButton
        className={'button-text--small'}
        variant={'text'}
        color={'secondary'}
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
  onClickBackToStartPage: PropTypes.func.isRequired,
  errors: PropTypes.array
}

export default LoginPage
