import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import HelpIcon from '@mui/icons-material/Help'
import StyledButton from '../../styledComponents/StyledButton'
import StyledForm from '../../styledComponents/StyledForm'

export const ForgotPasswordPage = (props) => {
  const {
    email,
    onChangeEmail,
    onClickRecover,
    onClickBackToLogin,
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
      <HelpIcon fontSize={'large'}/>
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
        className={'login-page-button'}
        color={'primary'}
        variant={'contained'}
        onClick={onClickRecover}
      >PRZYPOMNIJ HASŁO
      </StyledButton>
      <StyledButton
        className={'login-page-button'}
        variant={'text'}
        onClick={onClickBackToLogin}
      >Zaloguj się
      </StyledButton>
    </StyledForm>
  )
}

ForgotPasswordPage.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onClickRecover: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
  errors: PropTypes.array
}

export default ForgotPasswordPage
