import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Logo from '../Logo'
import { StyledForm, StyledButton, StyledFullPage, StyledNavLink } from '../../styledComponents'

export const LoginForm = (props) => {
  const {
    email,
    password,
    onClickLogin,
    onChangeEmail,
    onChangePassword,
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
    <StyledFullPage className={'login-page'}>
      <StyledForm className={'login-form'}>
        <Logo width={120}/>
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
          className={'button-login'}
          color={'primary'}
          variant={'contained'}
          onClick={onClickLogin}
        >ZALOGUJ SIĘ
        </StyledButton>
        <StyledNavLink to={'/create-account'}>
          <StyledButton
            className={'button-login'}
            variant={'outlined'}
            color={'secondary'}
          >UTWÓRZ KONTO
          </StyledButton>
        </StyledNavLink>
        <StyledNavLink to={'/recover-password'}>
          <StyledButton
            className={'button-login'}
            variant={'outlined'}
            color={'secondary'}
          >Przypomnij hasło
          </StyledButton>
        </StyledNavLink>
        <StyledNavLink to={'/'}>
          <StyledButton
            className={'button-login button-text--small'}
            variant={'text'}
            color={'secondary'}
          >Powrót na stronę główną
          </StyledButton>
        </StyledNavLink>
      </StyledForm>
    </StyledFullPage>

  )
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  errors: PropTypes.array
}

export default LoginForm
