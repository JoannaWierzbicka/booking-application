import styled from 'styled-components'

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px;
border-radius: 10px;
&.reservation{
    background-color: white;
    flex-direction: row;
    align-items: flex-start;
    @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
&.login-form{
  width: 50%;
  margin: 20px;
}
}
`

export default StyledForm
