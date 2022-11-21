import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import styled from 'styled-components'

export const StyledTimeline = styled(Timeline)`
font-family: monospace;
.rct-header-root {
    background: #673ab794;;
}
.rct-calendar-header {
    border: none;
}
.rct-outer {

}
.rct-scroll {
    background: #8bc34a40;
}
.rct-sidebar {
    background: #ffc0cb87
}
.rct-dateHeader {
    cursor: default;
}
`

export default StyledTimeline
