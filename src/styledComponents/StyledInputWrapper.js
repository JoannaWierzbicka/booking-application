import styled from 'styled-components'

export const StyledInputWrapper = styled.div`
display: flex;
 flex-direction: column;
 &.row-wrapper{
    width: 50%;
    @media only screen and (max-width: 650px) {
    width: 80%;
}
 }
 
`

export default StyledInputWrapper
