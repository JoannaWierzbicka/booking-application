import styled from 'styled-components'

export const StyledPaper = styled.div`
  z-index: 999999;
  width: 730px;
  background-color: white; 
  position: fixed;
  top: 60px;
  left: 200px;
  height: fit-content;
  font-family: Montserrat, sans-serif;
  line-height: 1.15;
  .form-header{
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #54a357;
    position: sticky;
    top: 0;
    left: 0;
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
    overflow: scroll;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    border: none;
  }
`

export default StyledPaper
