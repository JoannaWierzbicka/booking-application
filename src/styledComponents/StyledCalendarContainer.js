import styled from 'styled-components'

export const StyledCalendarContainer = styled.div`
width: 100vw;
height: 630px;
position: fixed;
top: 107px;
left: 0;
overflow: auto;
@media only screen and (max-width: 1000px) {
    height: 600px;
}
@media only screen and (max-width: 1000px) {
    top: 139px;
}
`

export default StyledCalendarContainer
