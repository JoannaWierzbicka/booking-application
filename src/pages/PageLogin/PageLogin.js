import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'
import { validateFormLogIn } from '../../helpers'
import PropTypes from 'prop-types'

export const PageLogin = (props) => {
  const {
    onClickLogin
  } = props

  const navigate = useNavigate()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState([])

  const onClickLoginFunc = async () => {
    const errors = validateFormLogIn(email, password)
    setErrors(errors)

    if (errors.length === 0) {
      onClickLogin(email, password)
      navigate('/admin')
    }
  }

  return (
    <LoginForm
      errors={errors}
      email={email}
      password={password}
      onClickLogin={onClickLoginFunc}
      onChangeEmail={(e) => setEmail(() => e.target.value)}
      onChangePassword={(e) => setPassword(() => e.target.value)}
    />
  )
}

PageLogin.propTypes = {
  onClickLogin: PropTypes.func.isRequired
}

export default PageLogin
