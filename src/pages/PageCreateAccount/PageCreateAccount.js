import React from 'react'
import CreateAccountForm from '../../components/CreateAccountForm'
import PropTypes from 'prop-types'
import { validateFormCreate } from '../../helpers'

export const PageCreateAccount = (props) => {
  const {
    onClickCreateAccount,
    onClickBackToStartPage,
    onClickBackToLogin
  } = props
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordRepeat, setPasswordRepeat] = React.useState('')
  const [errors, setErrors] = React.useState([])

  const onClickCreateAccountFunc = async () => {
    const errors = validateFormCreate(email, password, passwordRepeat)
    setErrors(errors)

    if (errors.length === 0) {
      onClickCreateAccount(email, password)
    }
  }

  return (
    <CreateAccountForm
      errors={errors}
      email={email}
      password={password}
      repeatPassword={passwordRepeat}
      onChangeEmail={(e) => setEmail(() => e.target.value)}
      onChangePassword={(e) => setPassword(() => e.target.value)}
      onChangeRepeatPassword={(e) => setPasswordRepeat(() => e.target.value)}
      onClickCreateAccount={onClickCreateAccountFunc}
      onClickBackToStartPage={onClickBackToStartPage}
      onClickBackToLogin={onClickBackToLogin}
    />
  )
}

PageCreateAccount.propTypes = {
  onClickCreateAccount: PropTypes.func.isRequired,
  onClickBackToStartPage: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired
}

export default PageCreateAccount
