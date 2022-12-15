import React from 'react'
import PropTypes from 'prop-types'
import ForgotPasswordForm from '../../components/ForgotPassworForm'

import { validateRecover } from '../../helpers/validation'

export const PageRecoverPassword = (props) => {
  const {
    onClickRecover
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
      errors={errors}
    />
  )
}

PageRecoverPassword.propTypes = {
  onClickRecover: PropTypes.func.isRequired
}

export default PageRecoverPassword
