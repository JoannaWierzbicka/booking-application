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
    background-color: #EBEDEF;
    @media only screen and (max-width: 450px) {
    align-items: flex-start;
  }
}
&.start-page{
    background-color: #2D3047;
}

`

export default StyledFullPage
