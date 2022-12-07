import styled from 'styled-components'

export const StyledInputWrapper = styled.div`
display: flex;
 flex-direction: column;
 &.reservation-layout{
   justify-content: space-between;
   flex-direction: row;
 }
 &.reservation-layout-prices{
   @media only screen and (max-width: 755px) {
    width: 50%;
}
 }
 &.row-wrapper{
    width: 50%;
    @media only screen and (max-width: 650px) {
    width: 80%;
}
 }
 &.room-form--wrapper{
    width: 70%;
 }
 &.start-page-buttons-wrapper{
    flex-direction: row;
    @media only screen and (max-width: 480px) {
    flex-direction: column;
}
 }
`

export default StyledInputWrapper
