import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import { StyledForm, StyledButton, StyledFullPage } from '../../styledComponents'
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
          <StyledButton
            className={'button-login'}
            color={'primary'}
            variant={'contained'}
            onClick={onClickCreateAccount}
          >UTWÓRZ KONTO
          </StyledButton>
          <StyledButton
            className={'button-login'}
            variant={'outlined'}
            color={'secondary'}
            onClick={onClickBackToLogin}
          >
            Zaloguj się
          </StyledButton>
          <StyledButton
            className={'button-login'}
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
