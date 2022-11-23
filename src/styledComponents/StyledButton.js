import styled from 'styled-components'

export const StyledButton = styled.button`
font-family: Montserrat, sans-serif;
font-size: 10px;
    border-radius: 8px;
    border: none;
    background-color: #2196f385;
    margin: 3px;
    cursor: pointer;
    padding: 4px 10px;
    box-shadow: 1px 1px 3px 1px #9e9e9ee0;
    &.button--close{
        position: absolute; 
        right: 5px;
         top: 5px;
    }
    &.button-reservation--new{
        padding: 14px;
        margin: 10px;
        font-size: 14px;
    }
    &.button-reservation--add{
        padding: 10px;
    }
    &.button-reservation--leave{
        padding: 5px;
        background-color: #2196f342;
    }
`

export default StyledButton
