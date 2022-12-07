import styled from '@emotion/styled'
import ButtonGroup from '@mui/material/ButtonGroup'

export const StyledButtonGroup = styled(ButtonGroup)`
&.button-prev-next{
    @media only screen and (max-width: 1000px) {
        position: fixed;
        top: 72px;
        right: 10px;
}
@media only screen and (max-width: 535px) {
        position: fixed;
        top: 58px;
        right: 3px;
}
@media only screen and (max-width: 460px) {
        position: fixed;
        top: 115px;
        right: 3px;
}
}
&.button-today{
        @media only screen and (max-width: 1000px) {
        position: fixed;
        top: 72px;
        left: 10px;
}
@media only screen and (max-width: 535px) {
        position: fixed;
        top: 58px;
        left: 3px;
}
@media only screen and (max-width: 460px) {
        position: fixed;
        top: 115px;
        left: 3px;
}    
}
@media only screen and (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px;
}

`

export default StyledButtonGroup
