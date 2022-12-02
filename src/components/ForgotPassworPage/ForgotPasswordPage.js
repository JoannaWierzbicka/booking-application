import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Logo from '../Logo'
import { StyledButton, StyledForm, StyledFullPage } from '../../styledComponents'

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
    <StyledFullPage>
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
          <StyledButton
            className={'button-login'}
            variant={'outlined'}
            color={'secondary'}
            onClick={onClickBackToLogin}
          >Zaloguj się
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

ForgotPasswordPage.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onClickRecover: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
  errors: PropTypes.array
}

export default ForgotPasswordPage
