import React from 'react'
import { useNavigate } from 'react-router-dom'
import ForgotPasswordForm from '../../components/ForgotPassworForm'
import PropTypes from 'prop-types'
import { validateRecover } from '../../helpers/validation'

export const PageRecoverPassword = (props) => {
  const {
    onClickRecover
  } = props

  const [email, setEmail] = React.useState('')
  const [errors, setErrors] = React.useState([])

  const navigate = useNavigate()

  const onClickRecoverFunc = async () => {
    const errors = validateRecover(email)
    setErrors(errors)

    if (errors.length === 0) {
      onClickRecover(email)
      navigate('/login')
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
