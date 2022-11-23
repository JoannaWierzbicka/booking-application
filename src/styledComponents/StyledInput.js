import styled from 'styled-components'

export const StyledInput = styled.input`
border-radius: 5px;
    border: none;
    background-color: #0000ff1f;
    padding: 5px;
    margin: 5px;
    box-shadow: inset 1px 1px 1px 1px #00000045;
    width: 80%;
    &.input--short{
        width: 60%;
    }
`

export default StyledInput
