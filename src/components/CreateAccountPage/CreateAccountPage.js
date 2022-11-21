import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
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
    onClickBackToLogin,
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
      <TextField
        size={'small'}
        margin={'dense'}
        type={'password'}
        label={'Powtórz hasło'}
        variant={'outlined'}
        value={repeatPassword}
        onChange={onChangeRepeatPassword}
      />
      <Button
        color={'primary'}
        variant={'contained'}
        onClick={onClickCreateAccount}
      >UTWÓRZ KONTO
      </Button>
      <Button
        variant={'outlined'}
        color={'secondary'}
        onClick={onClickBackToLogin}
      >
        Zaloguj się
      </Button>
      <Button
        className={'button-text--small'}
        variant={'text'}
        color={'secondary'}
        onClick={onClickBackToStartPage}
      >Powrót na stronę główną
      </Button>
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
  onChangeRepeatPassword: PropTypes.func.isRequired,
  onClickBackToStartPage: PropTypes.func.isRequired,
  errors: PropTypes.array
}

export default CreateAccountPage
