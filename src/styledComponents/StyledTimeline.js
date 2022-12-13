import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import styled from 'styled-components'

export const StyledTimeline = styled(Timeline)`
font-family: Montserrat, sans-serif;
z-index: 999999;
.rct-header-root {
    background: #1d3557;;
}
.rct-calendar-header {
    border: none;
}
.rct-scroll {
    background: #457b9d3d;    
}
.rct-sidebar {
    background: #457b9db8;
}
.rct-dateHeader {
    cursor: default;
}
`

export default StyledTimeline
