import Button from '@mui/material/Button'
import styled from '@emotion/styled'

export const StyledButton = styled(Button)`
font-family: Montserrat, sans-serif;
font-size: 12px;

    &.button--close{
        position: absolute; 
        right: 5px;
         top: 5px;
    }
    &.button-reservation--form{
        padding: 3px;
        margin: 3px;
        @media only screen and (max-width: 650px) {
           margin-top: 20px;
           padding: 10px 20px;
}}  
    &.button-reservation--add{
        padding: 8px;
        margin: 10px;
        font-size: 12px;
        color: white;
     
    }
    &.button-date{
        @media only screen and (max-width: 500px) {
            padding: 0px;
}}
    &.button-date--months{
        @media only screen and (max-width: 500px) {
            padding: 0px;

}}
    &.button-date--small{
        display: none;
        @media only screen and (max-width: 500px) {
            display: flex;
            padding: 0px;
}}   
&.button-login{
    width: 100%;
    margin: 5px;
}
&.add-room1{
    position: absolute;
    top: 20px;
    right: 90px;
      @media only screen and (max-width: 650px) {
   position: static;
  }
}
&.add-room2{
    position: absolute;
    top: 20px;
    right: 15px;
      @media only screen and (max-width: 650px) {
       position: static;
  }
}
`

export default StyledButton
