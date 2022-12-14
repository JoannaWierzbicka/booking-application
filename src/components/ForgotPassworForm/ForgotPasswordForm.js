import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Logo from '../Logo'
import { StyledButton, StyledForm, StyledFullPage, StyledNavLink } from '../../styledComponents'

export const ForgotPasswordForm = (props) => {
  const {
    email,
    onChangeEmail,
    onClickRecover,
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
          className={'button-login'}
          color={'primary'}
          variant={'contained'}
          onClick={onClickRecover}
        >PRZYPOMNIJ HASŁO
        </StyledButton>
        <StyledNavLink to={'/login'}>
          <StyledButton
            className={'button-login'}
            variant={'outlined'}
            color={'secondary'}
          >Zaloguj się
          </StyledButton>
        </StyledNavLink>
      </StyledForm>
    </StyledFullPage>

  )
}

ForgotPasswordForm.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onClickRecover: PropTypes.func.isRequired,
  errors: PropTypes.array
}

export default ForgotPasswordForm
