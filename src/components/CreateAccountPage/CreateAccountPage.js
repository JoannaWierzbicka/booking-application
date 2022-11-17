import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
// import PersonAddIcon from '@mui/icons-material/PersonAdd'
import StyledButton from '../../styledComponents/StyledButton'
import StyledForm from '../../styledComponents/StyledForm'
import Logo from '../Logo'

export const CreateAccountPage = (props) => {
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    repeatPassword,
    onChangeRepeatPassword,
    onClickCreateAccount,
    onClickBackToLogin
  } = props
  return (
    <StyledForm>
      <Logo style={{ width: '100px' }}/>
      {/* <PersonAddIcon fontSize={'large'}/> */}
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
        className={'login-page-button'}
        color={'primary'}
        variant={'contained'}
        onClick={onClickCreateAccount}
      >UTWÓRZ KONTO
      </StyledButton>
      <StyledButton
        variant={'text'}
        onClick={onClickBackToLogin}
      >
        Zaloguj się
      </StyledButton>
    </StyledForm>
  )
}

CreateAccountPage.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
  onChangeRepeatPassword: PropTypes.func.isRequired
}

export default CreateAccountPage
