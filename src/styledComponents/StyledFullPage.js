import styled from 'styled-components'

export const StyledFullPage = styled.div`
background-color: white;
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: white;;

&.message {
    flex-direction: column;
}
&.admin-page{
    background-color:#EBEDEF;
}
&.login-page{
    background-color: #E7E6E9;
}

`

export default StyledFullPage
