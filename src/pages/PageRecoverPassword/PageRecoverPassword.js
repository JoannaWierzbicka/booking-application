import React from 'react'
import ForgotPasswordForm from '../../components/ForgotPassworForm'
import PropTypes from 'prop-types'
import { validateRecover } from '../../helpers/validation'

export const PageRecoverPassword = (props) => {
  const {
    onClickRecover,
    onClickBackToLogin
  } = props

  const [email, setEmail] = React.useState('')
  const [errors, setErrors] = React.useState([])

  const onClickRecoverFunc = async () => {
    const errors = validateRecover(email)
    setErrors(errors)

    if (errors.length === 0) {
      onClickRecover(email)
    }
  }

  return (
    <ForgotPasswordForm
      email={email}
      onChangeEmail={(e) => setEmail(() => e.target.value)}
      onClickRecover={onClickRecoverFunc}
      onClickBackToLogin={onClickBackToLogin}
      errors={errors}
    />
  )
}

PageRecoverPassword.propTypes = {
  onClickRecover: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired
}

export default PageRecoverPassword
