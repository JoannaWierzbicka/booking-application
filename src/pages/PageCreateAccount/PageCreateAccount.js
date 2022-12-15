import React from 'react'
import PropTypes from 'prop-types'

import CreateAccountForm from '../../components/CreateAccountForm'
import { validateFormCreate } from '../../helpers'

export const PageCreateAccount = (props) => {
  const {
    onClickCreateAccount
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
    />
  )
}

PageCreateAccount.propTypes = {
  onClickCreateAccount: PropTypes.func.isRequired
}

export default PageCreateAccount
