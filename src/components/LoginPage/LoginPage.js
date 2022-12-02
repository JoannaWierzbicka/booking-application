import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Logo from '../Logo'
import { StyledForm, StyledButton, StyledFullPage } from '../../styledComponents'

export const LoginPage = (props) => {
  const {
    email,
    password,
    onClickLogin,
    onClickCreateAccount,
    onChangeEmail,
    onChangePassword,
    onClickBackToStartPage,
    onClickRecoverPassword,
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '80vh',
          border: '1px solid black',
          boxShadow:
    '5px 5px 5px 4px #cecdd0',
          borderRadius: '15px',
          backgroundColor: 'white'
        }}
      >
        <StyledForm className={'login-form'}>
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
            className={'button-login'}
            color={'primary'}
            variant={'contained'}
            onClick={onClickLogin}
          >ZALOGUJ SIĘ
          </StyledButton>
          <StyledButton
            className={'button-login'}
            variant={'outlined'}
            color={'secondary'}
            onClick={onClickCreateAccount}
          >UTWÓRZ KONTO
          </StyledButton>
          <StyledButton
            className={'button-login'}
            variant={'outlined'}
            color={'secondary'}
            onClick={onClickRecoverPassword}
          >Przypomnij hasło
          </StyledButton>
          <StyledButton
            className={'button-login button-text--small'}
            variant={'text'}
            color={'secondary'}
            onClick={onClickBackToStartPage}
          >Powrót na stronę główną
          </StyledButton>
        </StyledForm>
        <img
          src={'https://cdn.dribbble.com/users/449553/screenshots/6233437/calendar.jpg'}
          alt={'zdj'}
          style={{ width: '50%' }}
        />
      </div>
    </StyledFullPage>
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
  onClickRecoverPassword: PropTypes.func,
  errors: PropTypes.array
}

export default LoginPage
