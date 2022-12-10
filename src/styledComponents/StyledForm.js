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
    box-shadow: 8px 8px 24px 0px rgb(66 68 90/51%);
    @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
}
&.login-form{
  background-color: white;
  box-shadow: 5px 5px 5px 4px #cecdd0; 
  @media only screen and (max-width: 450px) {
    margin-top: 100px;
  }
}
&.room-form{
  position: relative;
  @media only screen and (max-width: 900px) {
    align-items: flex-start;
  }
}
.checkbox-grid{
  display: grid;
  grid-template-columns: 150px 150px 150px;
  padding: 10px;
}
`

export default StyledForm
