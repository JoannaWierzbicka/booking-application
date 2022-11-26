import styled from 'styled-components'

export const StyledCalendarContainer = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 107px;
left: 0;
@media only screen and (max-width: 850px) {
    top: 139px;
}
@media only screen and (max-width: 340px) {
    top: 172px;
}

`

export default StyledCalendarContainer
