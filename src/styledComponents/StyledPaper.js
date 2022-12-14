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
  box-shadow: 8px 8px 24px 0px rgb(66 68 90/51%);
  border-radius: 4px;
  .form-header{
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #c1b8a7;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000000;
  }
  &.paper-reservation{
   @media only screen and (max-width: 1050px) {
    left: 120px;
  }
  @media only screen and (max-width: 930px) {
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


}

&.paper-room{
  @media only screen and (max-width: 1050px) {
    left: 120px;
  }
  @media only screen and (max-width: 900px) {
    left: 120px;
    width: 60%;
  } 
  
  @media only screen and (max-width: 730px) {
    overflow: scroll;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    border: none;
  }

}

 

`

export default StyledPaper
