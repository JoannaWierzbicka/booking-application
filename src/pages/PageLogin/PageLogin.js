import React from 'react'
import LoginForm from '../../components/LoginForm'
import { validateFormLogIn } from '../../helpers'
import PropTypes from 'prop-types'

export const PageLogin = (props) => {
  const {
    onClickLogin,
    onClickCreateAccount,
    onClickBackToStartPage,
    onClickRecoverPassword
  } = props

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState([])

  const onClickLoginFunc = async () => {
    const errors = validateFormLogIn(email, password)
    setErrors(errors)

    if (errors.length === 0) {
      onClickLogin(email, password)
    }
  }

  return (
    <LoginForm
      errors={errors}
      email={email}
      password={password}
      onClickLogin={onClickLoginFunc}
      onClickCreateAccount={onClickCreateAccount}
      onChangeEmail={(e) => setEmail(() => e.target.value)}
      onClickBackToStartPage={onClickBackToStartPage}
      onChangePassword={(e) => setPassword(() => e.target.value)}
      onClickRecoverPassword={onClickRecoverPassword}
    />
  )
}

PageLogin.propTypes = {
  onClickLogin: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired,
  onClickBackToStartPage: PropTypes.func.isRequired,
  onClickRecoverPassword: PropTypes.func.isRequired
}

export default PageLogin
