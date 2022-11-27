import styled from 'styled-components'

export const StyledInput = styled.input`
    border: none;
    padding: 5px;
    margin: 5px;
    margin-bottom: 20px;
    background-color: white;
    border-bottom: 1px solid black;
    width: 80%;
    &.input--short{
        width: 60%;
    }
    @media only screen and (max-width: 650px) {
      width: 50%;
  }
`

export default StyledInput
