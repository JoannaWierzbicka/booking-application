import styled from 'styled-components'

export const StyledButtonsContainer = styled.div`
margin-top: 8px;
display: flex;
width: 100%;
justify-content: space-around;
position: fixed;
top: 60px;
left: 0; 
@media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
}
@media only screen and (max-width: 500px) {
}
`

export default StyledButtonsContainer
