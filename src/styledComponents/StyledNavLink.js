import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
line-height: 0;
color: black;
width: 100%;
margin-left: -10px;
&.nav-bar-link{
    margin: 0px;
}
&.button-message{
    width: auto;
}

`

export default StyledNavLink
