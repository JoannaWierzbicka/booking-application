import styled from 'styled-components'

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px;
background-color: #00800017;
border-radius: 10px;
&.reservation{
    background-color: white;
    flex-direction: row;
    align-items: flex-start;
    @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
}
`

export default StyledForm
