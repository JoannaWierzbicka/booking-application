import styled from 'styled-components'

export const StyledPaper = styled.div`
  z-index: 999999;
  width: 730px;
  background-color: white; 
  position: fixed;
  top: 60px;
  left: 200px;
  border-radius: 10px;
  border: 5px solid green;
  height: fit-content;
  font-family: Montserrat, sans-serif;
  line-height: 1.15;
  .form-header{
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 10px
  }
  @media only screen and (max-width: 1050px) {
    left: 120px;
  }
  @media only screen and (max-width: 900px) {
    left: 80px;
    width: auto;
  }
  @media only screen and (max-width: 730px) {
    left: 40px;
    width: auto;
  }
  @media only screen and (max-width: 650px) {
    width: -webkit-fill-available;

  }
`

export default StyledPaper
