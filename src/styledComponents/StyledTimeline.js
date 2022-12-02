import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import styled from 'styled-components'

export const StyledTimeline = styled(Timeline)`
font-family: Montserrat, sans-serif;
.rct-header-root {
    background: #51A018;;
}
.rct-calendar-header {
    border: none;
}
.rct-scroll {
    background: #51a0185c;;
}
.rct-sidebar {
    background: #f2b03e73;
}
.rct-dateHeader {
    cursor: default;
}
.rct-scroll{

}
.rct-outer {
   
}
`

export default StyledTimeline
