import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import { StyledForm, StyledButton, StyledFullPage, StyledNavLink } from '../../styledComponents'
import Logo from '../Logo'

export const CreateAccountForm = (props) => {
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    repeatPassword,
    onChangeRepeatPassword,
    onClickCreateAccount,
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
        <TextField
          size={'small'}
          margin={'dense'}
          type={'password'}
          label={'Powtórz hasło'}
          variant={'outlined'}
          value={repeatPassword}
          onChange={onChangeRepeatPassword}
        />
        <StyledButton
          className={'button-login'}
          color={'primary'}
          variant={'contained'}
          onClick={onClickCreateAccount}
        >UTWÓRZ KONTO
        </StyledButton>
        <StyledNavLink to={'/login'}>
          <StyledButton
            className={'button-login'}
            variant={'outlined'}
            color={'secondary'}
          >
            Zaloguj się
          </StyledButton>
        </StyledNavLink>
        <StyledNavLink to={'/'}>
          <StyledButton
            className={'button-login'}
            variant={'text'}
            color={'secondary'}
          >Powrót na stronę główną
          </StyledButton>
        </StyledNavLink>
      </StyledForm>
    </StyledFullPage>

  )
}

CreateAccountForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired,
  onChangeRepeatPassword: PropTypes.func.isRequired,
  errors: PropTypes.array
}

export default CreateAccountForm
